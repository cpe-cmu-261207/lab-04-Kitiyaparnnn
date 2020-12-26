export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <div class="shadow-md p-3 rounded-3xl m-2 ;box-sizing: content-box">
      <div>
        <h2 className="text-xl my-1 text-green-400 italic">course name : {props.vname}</h2>
        <h1 className="text-xl my-1">course code : {props.vcode}</h1>
        <h1 className="text-xl my-1">credit : {props.vcredit}</h1>
        <h2 className="text-xl my-1 text-yellow-300">course grade : {props.vgrade}</h2>

        <div class="text-right ; text-danger">
          <button onClick={() => { props.del(props.vname) }}>x</button>
        </div>
      </div>
    </div>

  );
};
