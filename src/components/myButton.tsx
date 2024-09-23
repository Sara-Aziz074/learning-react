"use client"

//name function
//Arrow function

const MyButton = () => {

    const handelClick=()=>{
        alert('Hello i am button click me')
    }

    return  (
    <div className="flex gap-5 p-3 flex-col">

        <div>

        <button className="bg-red-600  rounded-md p-1" onClick={handelClick}> I'm a button</button>

        </div>

         { `Web Events , React hooks Client Component, to make client component always use "use client" 
          on top of the file`}
    </div>
    );
}

export default MyButton;