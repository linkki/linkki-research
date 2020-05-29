function elem(name, attrs, children) {
	const element = document.createElement(name);
	for (const key of Object.keys(attrs || {})) {
		element[key] = attrs[key];
	}
	for (const child of children || []) {
		element.appendChild(child);
	}
	return element;
}

const editors = {};
let dialogAdded = false;
let editorCounter = 0;
function addEditor(value, readOnly, lang) {
	if (!dialogAdded) {
		addDialog();
		dialogAdded = true;
	}
	const number = editorCounter++;
	if (readOnly) {
		document.write(`
		<div class="split-screen">
			<div class="editor editor-side" id="editor${number}"></div>
			<div class="right result-side">
				<iframe class="result" id="result${number}"></iframe>
			</div>
		</div>`);
	} else {
		document.write(`
		<div class="split-screen">
			<div class="left editor-side">
				<div class="toolbar"><button id="update${number}">🏴</button><button id="open${number}">Avaa</button><button id="save${number}">Tallenna</button></div>
				<div class="editor" id="editor${number}"></div>
			</div>
			<div class="right result-side">
				<iframe class="result" id="result${number}"></iframe>
			</div>
		</div>`);
	}
	const editor = ace.edit(`editor${number}`);
	editors[number] = editor;
	editor.setTheme("ace/theme/eclipse");
	editor.session.setMode("ace/mode/" + (lang || "html"));
	editor.setOptions({
		useSoftTabs: true,
		cursorStyle: "slim",
		maxLines: 100,
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: false,
		showGutter: !readOnly,
		highlightActiveLine: !readOnly,
		behavioursEnabled: false,
	});
	editor.setReadOnly(readOnly);
	
	editor.setValue(value);
	editor.clearSelection();
	
	const update = () => {
		const iframe = document.querySelector(`#result${number}`);
		iframe.src = "data:text/html;charset=latin1," + escape(editor.getValue());
		
		// FIXME
		//iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
	};
	
	if (readOnly) {
		update();
	} else {
		document.querySelector(`#update${number}`).onclick = update;
		//editor.session.on("change", update);

		document.querySelector(`#open${number}`).onclick = async () => {
			const content = await openFile();
			if (!content) return;
			editor.setValue(content);
			editor.clearSelection();
		};

		document.querySelector(`#save${number}`).onclick = async () => {
			await saveFile(editor.getValue());
		};
	}
}
function codeExample(value, lang, small) {
	const number = editorCounter++;
	document.write(`
	<div class="editor" id="editor${number}"></div>
	`);
	const editor = ace.edit(`editor${number}`);
	editor.setReadOnly(true);
	editor.setTheme("ace/theme/eclipse");
	editor.session.setMode("ace/mode/" + (lang || "html"));
	editor.setOptions({
		useSoftTabs: true,
		cursorStyle: "slim",
		maxLines: 100,
		showGutter: false,
		highlightActiveLine: false,
		fontSize: small ? "small" : "large",
	});
	editor.renderer.$cursorLayer.element.style.display = "none";
	editor.setValue(value);
	editor.clearSelection();
}
const closeScript = "</script>";

let folder = null;
let file = null;
let password = null;
const passwords = {};

let fileAction = null;
let fileContent = null;
let finishAction = null;

function saveFile(content) {
	return new Promise((resolve, reject) => {
		fileAction = saveFileAction;
		fileContent = content;
		finishAction = resolve;
		document.querySelector("#dialog").style.display = "block";
	});
}

async function saveFileAction() {
	const formData = new FormData();
	formData.set("password", password);
	formData.set("content", fileContent);
	await fetch(`https://sorsa.herokuapp.com/folder/${folder}/document/${file}`, {
		method: "PUT",
		body: formData
	});
}

function openFile() {
	return new Promise((resolve, reject) => {
		fileAction = openFileAction;
		finishAction = resolve;
		document.querySelector("#dialog").style.display = "block";
	});
}

async function openFileAction() {
	const response = await fetch(`https://sorsa.herokuapp.com/folder/${folder}/document/${file}?password=${encodeURIComponent(password)}`, {
		method: "GET"
	});
	const text = await response.text();
	return text;
}

function closeDialog(result) {
	document.querySelector("#folderContent").innerHTML = "";
	document.querySelector("#fileName").value = "";
	document.querySelector("#fileForm").style.display = "none";
	document.querySelector("#dialog").style.display = "none";
	file = folder = password = null;
	finishAction(result);
}

function addDialog() {
	const dialog = elem("div", {
		className: "dialog",
		id: "dialog",
		innerHTML: `
<button id="cancel">Peruuta</button>
<h2>Valitse tiedosto</h2>
<form id="folderForm">
  <input type="text" id="folderName" placeholder="Kansio">
  <input type="submit" value="Avaa kansio">
</form>
<div id="folderContent"></div>
<form id="fileForm" style="display: none;">
  <input type="text" id="fileName" placeholder="Tiedosto">
  <input type="submit" value="Valitse tiedosto">
</form>
`});
	dialog.style.display = "none";
	document.querySelector("body").appendChild(dialog);
	document.querySelector("#folderForm").onsubmit = async event => {
		event.preventDefault();
		const folderName = document.querySelector("#folderName").value;
		try {
			const givenPassword = passwords[folderName] || prompt("Anna kansion salasana.");
			const response = await fetch(`https://sorsa.herokuapp.com/folder/${folderName}/list?password=${encodeURIComponent(givenPassword)}`, {method: "GET"});
			const listing = await response.json();
			const table = elem("table", {
				innerHTML: `<tr><th>Nimi</th><th>Koko</th></tr>`,
			});
			for (const file of listing) {
				const button = elem("button", {
					onclick: () => {
						document.querySelector("#fileName").value = file.name;
					},
					textContent: file.name,
				});
				let nameTd, sizeTd;
				table.appendChild(elem("tr", {}, [nameTd=elem("td"), sizeTd=elem("td")]));
				nameTd.appendChild(button);
				sizeTd.textContent = file.size + " tavua";
			}
			document.querySelector("#folderContent").innerHTML = "";
			document.querySelector("#folderContent").appendChild(table);
			document.querySelector("#fileForm").style.display = "block";
			folder = folderName;
			password = givenPassword;
			passwords[folder] = password;
		} catch (error) {
			alert(error);
		}
	};
	document.querySelector("#fileForm").onsubmit = async event => {
		event.preventDefault();
		let result = undefined;
		try {
			const fileName = document.querySelector("#fileName").value;
			file = fileName;
			result = await fileAction();
		} catch (error) {
			alert(error);
		}
		closeDialog(result);
	};
	document.querySelector("#cancel").onclick = async event => {
		closeDialog(undefined);
	};
}

function createQuestionnaire(data) {
	const state = {
		questions: data.questions.map(_ => undefined)
	}
	const form = elem("form", {className: "question-form"}, [
		...data.questions.map((q, i) => elem("fieldset", {}, [
			elem("legend", {textContent: "Kysymys " + (i+1)}),
			elem("b", {textContent: q.text}),
			...q.alternatives.map((alt, j) => elem("label", {
				textContent: alt.text, id: data.id + "-" + i + "-" + j + "-label"
			}, [
				elem("input", {
					type: "radio",
					name: data.id + "-" + i,
					id: data.id + "-" + i + "-" + j,
					onclick: () => {
						document.getElementById(data.id + "-" + i + "-" + j + "-label").style.backgroundColor = alt.correct ? "green" : "red"
						document.getElementsByName(data.id + "-" + i).forEach(e => e.disabled = true)
						state.questions[i] = !!alt.correct
						if (state.questions.every(i => typeof i === 'boolean')) {
							const score = state.questions.filter(i => i).length
							form.appendChild(elem("b", {textContent: "Tulos: " + score + "/" + data.questions.length}))
						}
					}
				})
			]))
		]))
	]);
	document.getElementById(data.id).appendChild(form);
}