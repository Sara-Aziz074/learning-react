import MyButton from "@/components/myButton";
import AboutPage from "@/components/markupWithJSX ";

function MyButton2() {
    return (
      <button className="p-2 bg-slate-400 rounded-lg">I'm a button 2</button>
    );
  }


const ReactLearning = () => {
    return <div className="flex flex-col gap-3 text-sx p-12">
   ReactLearning
   <div > 
    creat a component

    <h1 className="font-bold">Welcome to my app</h1>
    <div className="space-y-5 flex gap-2 py-2">    
    <MyButton />
    <div>

    </div>
</div>
   </div>

    <p className="text-sm font-semibold bg-slate-400" >Markup With JSX</p>
   
   <div><AboutPage /></div>
   <div>
    Adding styles
    <p className="text-sm font-semibold bg-slate-400">
    In React, you specify a CSS class with className. It works the same way as the HTML class attribute:
    </p>
   </div>
    </div>
}
export default ReactLearning;
