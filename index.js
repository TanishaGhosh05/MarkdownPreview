 marked.setOptions({
    breaks:true
})
const renderer= new marked.Renderer();
function App() {
    const [text,setText] =React.useState("");
    return (
    <div className="text-center px-4">
        <h2 className="p-4"> Markdown Previewer</h2>
        <textarea 
        name="text" 
        id="text"
        rows="10" 
        value={text} 
        onChange={(e)=> setText(e.target.value)}
        className="textarea"
        ></textarea>
        <h2 className="mt-3">Output</h2>
        <Preview markdown={text}/>
    </div>
    );
    }
    function insertText(text) {
        var textarea = document.getElementById("markdownEditor");
        var cursorPos = textarea.selectionStart;
        var textBeforeCursor = textarea.value.substring(0, cursorPos);
        var textAfterCursor = textarea.value.substring(cursorPos, textarea.value.length);
    
        textarea.value = textBeforeCursor + text + textAfterCursor;
        textarea.selectionStart = cursorPos + text.length;
        textarea.selectionEnd = cursorPos + text.length;
        textarea.focus();
    }
    function updatePreview() {
        document.getElementById("preview").innerHTML=marked(document.getElementById("editor").value)
     }
    function Preview({markdown}){
        
     return(
        <div 
         dangerouslySetInnerHTML={{
            __html: marked(markdown,{renderer:renderer}),
        }}
        id="preview"
        ></div>
        );
    }
    <img title="a title" alt="Alt text" src="/images/boo.svg"></img>
ReactDOM.render(<App/>, document.getElementById("root"));