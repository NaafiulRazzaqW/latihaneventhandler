function Button ({onSmash, children}){
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    )
}

export default function ButtonTest(){
    return (
        <>
        <div>
            <Button onSmash={() => alert('Playing!')}>
                PLay Movie
            </Button>
            <Button onSmash={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
        </>
    )
}