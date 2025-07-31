const para="hello kanikaa and deepika"
const textmatch=para.match(/\bk\w+a\b/g);
console.log(textmatch);

const mobilenumber=9092171774;
const nummatch=/^[0-9]\d{9}/g;
if(nummatch.test(mobilenumber.toString())){
    console.log("matched")
}
else{
    console.log("mismacth pattern")
}