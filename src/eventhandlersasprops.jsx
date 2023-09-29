function Button ({onclick, children}){
    return (
        <button onClick={onclick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton(){
    return(
        <Button onClick={() => alert("Uploading!")}>
            Upload Image
        </Button>
    )
}

export default function Toolbar1(){
    return(
        <>
        <div>
            <PlayButton movieName={"Kiki Delivery Car"}/>
            <UploadButton/>
        </div>
        </>
    )
}