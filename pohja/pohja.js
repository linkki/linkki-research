
let editorCounter = 0;
function addEditor(value, readOnly, lang) {
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
				<div class="toolbar"><button id="update${number}">🏴</button></div>
				<div class="editor" id="editor${number}"></div>
			</div>
			<div class="right result-side">
				<iframe class="result" id="result${number}"></iframe>
			</div>
		</div>`);
	}
	const editor = ace.edit(`editor${number}`);
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
	editor.renderer.$cursorLayer.element.style.display = "none"
	editor.setValue(value);
	editor.clearSelection();
}
let closeScript = "</script>";
