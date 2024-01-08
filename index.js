var fullName = prompt("enter your name");
var noSpaces = fullName.split(" ").join("");
var names = noSpaces.toLowerCase();var fullName = prompt("enter your name");
var noSpaces = fullName.split(" ").join("");
var names = noSpaces.toLowerCase();
const machaNames = ["mouni","mounish","cheenu","srinivas","srini","dhanesh","sunil"];
const girlNames = ["janani","deepa","vinitha","shakila","vini","sakila"];
const genNames = ["prashanth","prasanth","dilipkumar","suresh"];
const mamaNames = ["bharath","barath","ragu","raguraman","sarath","dilli","dillibabu"];
const annaNames = ["sharath","shoban","nandakumar","nandhakumar","nandha","nanda","chittibabu","chitti","gunasekar","baskhar","baskar","bhaskar","bhaskhar"];
const swapna = ["swapna","monika","monica"];
const akkaNames = ["sivaranjini","shivaranjini","shiva","siva","Shamili","sham","usha","durga","suganya","revathi","revathy","priya","priyanka","kavitha","kalpana"];
const ofzAnna = ["thirupathi","sangappa","abhishek"];
const ofzJi = ["shivukumar","akhilesh","akilesh","pavan","gopiram","manjunatha r","manjunatha","amruth","prbhakar","prabhakar","balaji"];
const mummy = ["jyothi"]; 
const susi=["susi","sushmitha"];
const aunty = ["roopa"];
const sir = ["anilkulkarni","kashi","balachandra","anil"];
const nikhil = ["nikhil"];
const vino=["vinoth","vino"];
const anni = ["sneka","snekha","sneha"];
const sissy = ["praveena","pravena","pravina","nisha","preethi","preethy","shalini","shallni","shalni"]
var emoji = String.fromCodePoint(0x1F61C);

if (machaNames.includes(names)){
    document.querySelector(".message").textContent="Dei Macha " +names+ " en bachelor life mudiya podhu macha, kalyanam ayiduchu nu ena kalati vitutu neenga matum engayum pogadhinga da enga ponalum call pani solunga nanum varuven..sari kalyanathuku rendu nall munadiye vandhu seru macha";   
}

else if(girlNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ ", Enaku kalyanam ayiduchu nu msg or call lam panama irukadha epome nee en mama ponnu dha..aprm kalyanathuku rendu naal munadiye vandhuru baby " +String.fromCodePoint(0x1F60D);   
}
else if(mamaNames.includes(names)){
    document.querySelector(".message").textContent="Hi mama...en bachelor life mudiya podhu, kalyanam ayiduchu nu ena kalati vitutu neenga matum engayum pogadhinga, enga ponalum call pani solunga nanum varuven..sari kalyanathuku rendu nall munadiye vandhurunga marakama";   
}
else if(annaNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " anna...Enoda bachelor life over "+String.fromCodePoint(0x1F622)+ " kalyanam aagapodhu so marakama kalyanathuku vandhu engala bless panunga.. I will be waiting for you anna";   
}
else if(ofzAnna.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " anna...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}   

else if(akkaNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " akka...Enoda bachelor life over, kalyanam aagapodhu so marakama kalyanathuku vandhu engala bless panunga.. I will be waiting for you akka";   
}
else if(swapna.includes(names)){
    document.querySelector(".message").textContent="Hi aunty...Enoda bachelor life over, kalyanam aagapodhu so marakama kalyanathuku vandhu engala bless panu..pasangala kutitu va aunty ";   
}
else if(ofzJi.includes(names)){
    document.querySelector(".message").textContent="Hi Ji...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
else if(vino.includes(names)){
    document.querySelector(".message").textContent="Hi vinoth anna...anni unkita onnu sola sonanga enga honeymoon selavuku aagra kaasa unkita vangika sonanga epo kuduka pora na???";
}
else if(mummy.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " mummy...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
else if(aunty.includes(names)){
    document.querySelector(".message").textContent="Hi aunty...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
else if(nikhil.includes(names)){
    document.querySelector(".message").textContent="Hey boshhh...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration, so come and join us.";
}
else if(sir.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " sir...Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
else if(genNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ ", Enoda bachelor life over, kalyanam aagapodhu so marakama kalyanathuku vandhuru.. I will be waiting for you";   
}
else if(anni.includes(names)){
    document.querySelector(".message").textContent="Hi Anni andha honeymoon package ah konjam manasla vechikonga ungaluku oru pudhu sister kedachi irukanga ennala namba ellarum serndhu ini fun panlam anni" +emoji;
}
else if(susi.includes(names)){
    document.querySelector(".message").textContent="Hi susi, enaku kalyanam aagapodhu rendu naal munadiye vandhuru..kalyanam ayiduchu nu call panama lam irukadha epavum pola walking porapa call panu baby " +emoji;
}

else if(sissy.includes(names)){
    document.querySelector(".message").textContent="Hi paapa, Enoda bachelor life mudiya podhu, kalyanam aagapodhu so marakama annan kalyanathuku vandhuru.. I will be waiting for you";   
}
else{
   document.querySelector(".message").textContent="Hi Mr/Mrs." +names+ ", Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
const machaNames = ["mouni","mounish","cheenu","srinivas","dhanesh","sunil"];
const girlNames = ["janani","deepa","vinitha","shakila","vini","sakila"];
const genNames = ["prashanth","prasanth","dilipkumar"];
const mamaNames = ["bharath","barath","ragu","raguraman","sarath","dilli","dillibabu"];
const annaNames = ["sharath", "vinoth","shoban","nandakumar","nandhakumar","nandha","nanda","chittibabu","chitti","gunasekar","baskhar","baskar"];
const akkaNames = ["swapna","sivaranjini","Shamili","sham","usha","durga","suganya","revathi","revathy","priya","priyanka","kavitha","kalpana"];
const ofzAnna = ["thirupathi","sangappa","abhishek"];
const ofzJi = ["shivukumar","akhilesh","akilesh","pavan","gopiram","manjunatha r","manjunatha","amruth","prbhakar","prabhakar","balaji"];
const mummy = ["jyothi"]; 
const susi=["susi","sushmitha"]
const aunty = ["roopa"];
const sir = ["anilkulkarni","kashi","balachandra","anil"];
const ofzmale = ["vijay"];
const ofzfemale = ["maya"];
const nikhil = ["nikhil"];
const anni = ["sneka","snekha","sneha"];
const sissy = ["praveena","pravena","pravina","nisha","preethi","preethy","shalini","shallni","shalni"]
var emoji = String.fromCodePoint(0x1F61C);

if (machaNames.includes(names)){
    document.querySelector(".message").textContent="Dei Macha " +names+ " soli mudiyapodhu shock aagadha, enake oru ponnu okay paniduchu macha engagement panikapora, ungalukum seekram kedaikum vaitherichal padama vandhu serunga da aana sambhar soru dhan"+emoji;   
}

else if(girlNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " baby...Enaku engagement aagapodhu happy ah dhan iruku but unna lam miss pana poranu nenacha konjam feeling ah iruku " +String.fromCodePoint(0x1F622)+ " aanalum nee epome en aalu dhan kavala padama mama engagement ku vandhu seru"+String.fromCodePoint(0x1F60D);   
}
else if(mamaNames.includes(names)){
    document.querySelector(".message").textContent="Hi mama...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neengalum andha sandhoshathla kalandhukanum nu en aasai adhanala engagement ku marakama vandhudu mama";   
}
else if(annaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neengalum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudunga";   
}
else if(ofzAnna.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...I am overjoyed to share the good news of my engagement with you and I heartily invite you to join us in the celebration and shower your blessings on us";   
}
else if(akkaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " akka...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neeyum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudu ka.";   
}
else if(ofzJi.includes(names)){
    document.querySelector(".message").textContent="Hi Ji,I am overjoyed to share the good news of my engagement with you ji, I heartfully invite you to join us in the celebration and shower your blessings on us";   
}
else if(mummy.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " mummy...I am happy to share the good news of my engagement with you and invite you to join us in the celebration and shower your blessings on us";   
}
else if(aunty.includes(names)){
    document.querySelector(".message").textContent="Hi aunty, I am overjoyed to share the good news of my engagement with you and invite you to join us in the celebration and shower your blessings on us";   
}
else if(nikhil.includes(names)){
    document.querySelector(".message").textContent="Hey boshhh...how r you boshhh? you know what, am getting engaged....just come to the engagement and join us in the celebration man";
}
else if(sir.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ "sir, Happy to announce that I am getting Engaged and I cordially invite you to join the ceremony and shower your blessings on us";
}
else if(genNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ ",Enaku kalyanam aagapodhu, indha feel um nalla dhan pa iruku so neeyum andha sandhoshathla kalandhukanum nu nan aasa padra adhanala engagement ku marakama vandhudu " +names+"." ;
}
else if(anni.includes(names)){
    document.querySelector(".message").textContent="Anni'nravanga inoru amma maari adhanala engagement ah munadi ninnu nadathi kudunga apdiye andha honeymoon package ah matum annan kita soli book pani kuduka solunga " +emoji+ " plzz anni..."
}
else if(susi.includes(names)){
    document.querySelector(".message").textContent="Hi susi, enaku kalyanam aagapodhu rendu naal munadiye vandhuru..kalyanam ayiduchu nu call panama lam irukadha epavum pola walking porapa call panu baby " +emoji;
}

else if(sissy.includes(names)){
    document.querySelector(".message").textContent="Hi papa annan ku marriage fix ayiduchu...adhanala nov 19th engagement paniklam nu unga anniyum nanum decide pani irukom so, kandipa varanum...miss panadhinga apram nan varutha paduven..."
}
else {
    var gender = prompt("enter your gender as male or female");
    // if (gender === male){
    //     document.querySelector(".message").textContent=`Hi Mr.${names}, Happy to announce that I am getting Engaged and I cordially invite you to join the ceremony and shower your blessings on us`;
    // }
    // else{
        document.querySelector(".message").textContent="Hi Mr/Mrs." +names+ ", Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration";
}
