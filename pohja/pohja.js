
let editorCounter = 0;
function addEditor(value) {
	let number = editorCounter++;
	document.write(`
	<div class="split-screen">
		<div class="left editor-side">
			<div class="toolbar"><button id="update${number}">🏴</button></div>
			<div class="editor" id="editor${number}"></div>
		</div>
		<iframe class="right result" id="result${number}"></iframe>
	</div>`);
	const editor = ace.edit(`editor${number}`);
	editor.setTheme("ace/theme/eclipse");
	editor.session.setMode("ace/mode/html");
	editor.setOption("useSoftTabs", true);
	editor.setOption("cursorStyle", "slim");
	editor.setOption("maxLines", "100");
	
	const update = () => {
		document.querySelector(`#result${number}`).src = "data:text/html;charset=latin1," + escape(editor.getValue());
	};
	
	//editor.session.on("change", update);
	document.querySelector(`#update${number}`).onclick = update;
	//document.querySelector(`#result${number}`).src = "data:text/html;charset=latin1," + escape(value);
	editor.setValue(value);
	editor.clearSelection();
}
let closeScript = "</script>";
