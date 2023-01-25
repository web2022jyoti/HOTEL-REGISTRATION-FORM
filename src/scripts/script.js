
// Registration Form work

function NameVerify(){
    var name = document.getElementById("name-input").value;
    var nameMsg = document.getElementById("name-msg");
    var pattern = /^[a-zA-Z ]{1,30}$/;
    if (name == "") {
        nameMsg.innerHTML = "Customer Name Must Be Required".fontcolor("red");
    } else if (!(name.match(pattern))) {
        nameMsg.innerHTML = "Only Alphabet Allowed".fontcolor("red");
    } else if (name.indexOf("  ") != -1) {
        nameMsg.innerHTML = "Multiple spaces not allowed".fontcolor("red");
    } else if (name.trim().length < 3) {
        nameMsg.innerHTML = "Customer Name have Atleast 3 Character".fontcolor("red");
    } else if (name.length > 30) {
        nameMsg.innerHTML = "Customer Name have Maximum 30 Character".fontcolor("red");
    } else {
        nameMsg.innerHTML = "";
    }
}

function PersonVerify(){
    var person = document.getElementById("person-input").value;
    var personMsg = document.getElementById("person-msg");
    if (person == ""){
        personMsg.innerHTML="Minimum 1 Person Required".fontcolor("red");
    }else if(person == 0){
        personMsg.innerHTML = "Person Can't Be 0".fontcolor("red");
    }else if(person < 0){
        personMsg.innerHTML = "Person Can't Be Negative".fontcolor("red");
    }else if (person>2 && person<=5){
        alert("Upto 2 people cost no change\nFor every extra person you have to pay extra 1000");
        document.getElementById("person-input").value = Math.round(person);
        personMsg.innerHTML = "";
    }else if(person>5){
        personMsg.innerHTML="Allowed Only For Maximum 5 Members.".fontcolor("red");
    }else{
        document.getElementById("person-input").value = Math.round(person);
        personMsg.innerHTML = "";
    }
    
}
function AutoDate(){
    var inDate = document.getElementById("in-date-input");

    now = new Date();
    var date = now.getDate();
    if (date < 10){
        date = '0'+date;
    }
    var month = now.getMonth();
    month += 1;
    if (month < 10){
        month = '0'+month;
    }
    var year = now.getFullYear();
    inDate.value = `${year}-${month}-${date}`;
    inDate.min=`${year}-${month}-${date}`;
}
function DateVerify(){
    var inDate = document.getElementById("in-date-input").value;
    var inDateMsg = document.getElementById("in-date-msg");
    now = new Date;
    var date = now.getDate();
    var month = now.getMonth();
    month += 1;
    var year = now.getFullYear();
    var [inYearValue,inMonthValue,inDateValue] = inDate.split("-");
    
    if (inYearValue<year){
        inDateMsg.innerHTML = "Year Can't Be Past".fontcolor("red");
    }else if(inYearValue >= year+2){
        inDateMsg.innerHTML = "Before 2 Year Early You Can't Book Room".fontcolor("red");
    }else if(inYearValue==year){
        if (inMonthValue<month){
            inDateMsg.innerHTML = "Month Can't Be Past".fontcolor("red");
        }else if(inMonthValue==month){
            if (inDateValue<date){
                inDateMsg.innerHTML = "Day Can't Be Past".fontcolor("red");
            }else{
            inDateMsg.innerHTML = "";
            }
        }else{
            inDateMsg.innerHTML = "";
        }
    }else{
        inDateMsg.innerHTML = "";
    }  
}

function DayVerify(){
    var day = document.getElementById("total-days-input").value;
    var dayMsg = document.getElementById("total-days-msg");

    if (day==""){
        dayMsg.innerHTML = "Min 1 Days Required.".fontcolor("red");
    }else if(day == 0){
        dayMsg.innerHTML = "Day Can't Be 0".fontcolor("red");
    }else if(day < 0){
        dayMsg.innerHTML = "Day Can't Be Negative".fontcolor("red");
    }else if(day > 30){
        dayMsg.innerHTML = "Max 30 Days Only".fontcolor("red");
    }else{
        document.getElementById("total-days-input").value = Math.round(day);
        dayMsg.innerHTML = "";
    }
}

function AmountVerify(){
    var amount = document.getElementById("advance-amount-input").value;
    var amountMsg = document.getElementById("advance-amount-msg")

    if (amount==""){
        amountMsg.innerHTML = "Advance Amount Required.".fontcolor("red");
    }else if(amount == 0){
        amountMsg.innerHTML = "Advance Amount Can't 0".fontcolor("red");
    }else if(amount < 0){
        amountMsg.innerHTML = "Amount Can't Be Negative".fontcolor("red");
    }else if(amount < 1000){
        amountMsg.innerHTML = "Advance Amount Min 1000".fontcolor("red");
    }else if(amount > 2400){
        amountMsg.innerHTML = "Advance Amount Max 2400".fontcolor("red");
    }else{
        document.getElementById("advance-amount-input").value = Number(Math.round(amount+'e2')+'e-2');
        amountMsg.innerHTML = "";
    }

}
var deluxRoomSelected = "background-color:green;"; //x
var deluxRoomNotSelected = "background-color:transparent;";//y
var deluxRoomValue = deluxRoomNotSelected;

var suiteRoomSelected = "background-color:green;"; //x
var suiteRoomNotSelected = "background-color:transparent;";//y
var suiteRoomValue = suiteRoomNotSelected;


function DeluxRoomClick(){
    var deluxRoom = document.getElementById("delux-room-img");
    var deluxRoomDiv = document.getElementById("delux-room");

    var suiteRoom = document.getElementById("suite-room-img");
    var suiteRoomDiv = document.getElementById("suite-room");
    
    
    if (deluxRoomValue==deluxRoomSelected){
        deluxRoomValue = deluxRoomNotSelected;
        deluxRoomDiv.style = deluxRoomValue;
    }else{
        deluxRoomValue = deluxRoomSelected;
        deluxRoomDiv.style = deluxRoomValue;

        if (suiteRoomValue == suiteRoomSelected){
            suiteRoomValue = suiteRoomNotSelected;
            suiteRoomDiv.style = suiteRoomValue;
        }
        

    }
}


function SuiteRoomClick(){
    var suiteRoom = document.getElementById("suite-room-img");
    var suiteRoomDiv = document.getElementById("suite-room");

    var deluxRoom = document.getElementById("delux-room-img");
    var deluxRoomDiv = document.getElementById("delux-room");
    
    if (suiteRoomValue==suiteRoomSelected){
        suiteRoomValue = suiteRoomNotSelected;
        suiteRoomDiv.style = suiteRoomValue;
    }else{
        suiteRoomValue = suiteRoomSelected;
        suiteRoomDiv.style = suiteRoomValue;

        if (deluxRoomValue == deluxRoomSelected){
            deluxRoomValue = deluxRoomNotSelected;
            deluxRoomDiv.style = deluxRoomValue;
        }
        
    }
    
}

var acRoomSelected = "background-color:green;"; //x
var acRoomNotSelected = "background-color:transparent;";//y
var acRoomValue;//value
function AcClick(){
    var acRoom = document.getElementById("ac-room-img");
    var acRoomDiv = document.getElementById("ac-room");
    
    if (acRoomValue==acRoomSelected){
        acRoomValue = acRoomNotSelected;
        acRoomDiv.style = acRoomValue;
    }else{
        acRoomValue = acRoomSelected;
        acRoomDiv.style = acRoomValue;
    }
    
}

var lockerRoomSelected = "background-color:green;"; //x
var lockerRoomNotSelected = "background-color:transparent;";//y
var lockerRoomValue;//value
function LockerClick(){
    var lockerRoom = document.getElementById("locker-room-img");
    var lockerRoomDiv = document.getElementById("locker-room");
    
    if (lockerRoomValue==lockerRoomSelected){
        lockerRoomValue = lockerRoomNotSelected;
        lockerRoomDiv.style = lockerRoomValue;
    }else{
        lockerRoomValue = lockerRoomSelected;
        lockerRoomDiv.style = lockerRoomValue;
    }
    
}
function RegisterClick(){
    window.verifyNameInput = document.getElementById("name-input").value;
    var verifyNameMsg = document.getElementById("name-msg");

    window.verifyPersonInput = document.getElementById("person-input").value;
    var verifyPersonMsg = document.getElementById("person-msg");

    window.verifyInDateInput = document.getElementById("in-date-input").value;
    var verifyInDateMsg = document.getElementById("in-date-msg");

    window.verifyDaysInput = document.getElementById("total-days-input").value;
    var verifyDaysMsg = document.getElementById("total-days-msg");

    window.verifyAmountInput = document.getElementById("advance-amount-input").value;
    window.verifyAmountMsg = document.getElementById("advance-amount-msg");

    if (verifyNameInput == ""){
        alert("Name Can't be Empty");
    }else if(verifyNameMsg.innerHTML != ""){
        alert("Verify Name Value");
    }else if(verifyPersonInput == ""){
        alert("Enter Person Detail");
    }else if(verifyPersonMsg.innerHTML != ""){
        alert("Verify Person Detail");
    }else if(verifyInDateMsg.innerHTML != ""){
        alert("Verify Date");
    }else if(verifyDaysInput == ""){
        alert("Enter Total Day's")
    }else if(verifyDaysMsg.innerHTML != ""){
        alert("Verify Day's")
    }else if(verifyAmountInput == ""){
        alert("Enter Advance Amount")
    }else if(verifyAmountMsg.innerHTML != ""){
        alert("Verify Advance Amount")
    }else if((deluxRoomValue==deluxRoomNotSelected) && (suiteRoomValue==suiteRoomNotSelected)){
        alert("Please Select Room Type")
    }else{
        alert("booking Completed")
        document.querySelector("main").style.display="block";
        document.querySelector("footer").style.display="block";
        document.querySelector("section").style.display="none";
        document.getElementById("view-details-link").style.display="block";
        document.getElementById("book-room-link").style.display="none";
        bookRoomClick = "off";
    }
}
function CancelClick(){
    document.querySelector(".book-room-link").innerText="Book Room";
    document.querySelector("main").style.display="block";
    document.querySelector("footer").style.display="block";
    document.querySelector("section").style.display="none";
    bookRoomClick = "off";
}

var bookRoomClick = "off";
function BookRoomClick(){
    if (bookRoomClick == "off"){
        document.querySelector(".book-room-link").innerText="Cancel";
        document.querySelector("main").style.display="none";
        document.querySelector("footer").style.display="none";
        document.querySelector("section").style.display="block";
        bookRoomClick = "on";
    }else{
        document.querySelector(".book-room-link").innerText="Book Room";
        document.querySelector("main").style.display="block";
        document.querySelector("footer").style.display="block";
        document.querySelector("section").style.display="none";
        bookRoomClick = "off";
    }
}



var viewDetailsClick = "off"
function ViewDetailsClick(){
    if (viewDetailsClick == "off"){
        DataFetch()
        document.querySelector(".view-details-link").innerText="Cancel";
        document.querySelector("main").style.display="none";
        document.querySelector("footer").style.display="none";
        document.querySelector(".view-details-container").style.display="block";
        viewDetailsClick = "on";
    }else{
        document.querySelector(".view-details-link").innerText="View Details";
        document.querySelector("main").style.display="block";
        document.querySelector("footer").style.display="block";
        document.querySelector(".view-details-container").style.display="none";
        viewDetailsClick = "off";
    }
}


        var loader = document.getElementById("preloader");

        window.addEventListener("load", function(){
            loader.style.display = "none";
        })

        function PrintClick(){
            var userAns = confirm("After Print Data Will Be Delete\nDo You Want to Continue");
            if (userAns == true){
                window.print();
                location.reload();
            }
        }

        function DataFetch(){
            document.getElementById("customer-name-data").innerHTML = verifyNameInput.toUpperCase();
            document.getElementById("in-date-data").innerHTML = verifyInDateInput;
            document.getElementById("total-person-data").innerHTML = verifyPersonInput;
            document.getElementById("total-days-data").innerHTML = verifyDaysInput;
            document.getElementById("advance-amount-data").innerHTML= -verifyAmountInput+"<hr>";

            function TotalPersonData(){
                window.personValue = 0;
                if (verifyPersonInput <= 2){
                    personValue = 0;
                    return 0;
                }else{
                    var personCount = verifyPersonInput-2;
                    personValue = personCount*(verifyDaysInput*1000);
                    return personCount*(verifyDaysInput*1000);
                }
            }
            document.getElementById("total-person-amount-data").innerHTML = TotalPersonData();


            function RoomTypeData(){
                if (deluxRoomValue==deluxRoomSelected){
                    return "Delux-Room";
                }
                if (suiteRoomValue==suiteRoomSelected){
                    return "Suite-Room";
                }
            }
            document.getElementById("room-type-data").innerHTML = RoomTypeData();


            function RoomTypeAmountData(){
                window.roomValue = 0
                if (deluxRoomValue==deluxRoomSelected){
                    roomValue = 2500*verifyDaysInput;
                    return 2500*verifyDaysInput;
                }
                if (suiteRoomValue==suiteRoomSelected){
                    roomValue = 4000*verifyDaysInput;
                    return 4000*verifyDaysInput;
                }
            }
            document.getElementById("room-type-amount-data").innerHTML = RoomTypeAmountData();
        
            
            function AmenitiesTypeData(){
                if ((acRoomValue==acRoomSelected) && (lockerRoomValue==lockerRoomSelected)){
                    return "A/C, Locker"
                }else if((acRoomValue==acRoomSelected)){
                    return "A/C"
                }else if((lockerRoomValue==lockerRoomSelected)){
                    return "Locker"
                }else {
                    return "Not Added"
                }
            }
            document.getElementById("amenities-type-data").innerHTML = AmenitiesTypeData();

            
            function AmenitiesTypeAmountData(){
                window.amenitiesValue = 0;
                if ((acRoomValue==acRoomSelected) && (lockerRoomValue==lockerRoomSelected)){
                    amenitiesValue = (1000+300)*verifyDaysInput;
                    return (1000+300)*verifyDaysInput;
                }else if((acRoomValue==acRoomSelected)){
                    amenitiesValue = 1000*verifyDaysInput;
                    return 1000*verifyDaysInput;
                }else if((lockerRoomValue==lockerRoomSelected)){
                    amenitiesValue = 300*verifyDaysInput;
                    return 300*verifyDaysInput;
                }else {
                    amenitiesValue = 0;
                    return 0;
                }
            }
            document.getElementById("amenities-type-amount-data").innerHTML = AmenitiesTypeAmountData()+"<hr>";
        
            
            function GrossAmountData(){
                window.grossTotal = 0;
                grossTotal = personValue+roomValue+amenitiesValue;
                return grossTotal;
            }
            document.getElementById("gross-amount-data").innerHTML = GrossAmountData();
        
            
            function ExtraPayData(){
                window.extraPay = 0;
                extraPay = grossTotal-verifyAmountInput;
                return Number(Math.round(extraPay+'e2')+'e-2');
            }
            document.getElementById("extra-pay-data").innerHTML = "&#8377; "+ExtraPayData()+" /-<hr>";
        }

    
        var imgNum = 0;
        var landscape = window.matchMedia("screen and (orientation:landscape)");
        var portrait = window.matchMedia("screen and (orientation:portrait)");

        var landscapeImage = ["../public/image/urban11.jpg","../public/image/urban22.jpg",
        "../public/image/urban33.jpg","../public/image/urban44.jpg","../public/image/urban55.jpg"]
        
        // Loads the images one at a time, then calls the callback function when all images
        // have been loaded
        
        function loadImagesLandscape(landscapeImage, index) {
            if (index < landscapeImage.length) {
                let img = new Image();
                img.src = landscapeImage[index];
                landscapeImage[index] = img;
                loadImagesLandscape(landscapeImage, ++index)
            } else {
                loadImagesLandscape(landscapeImage);
            }
        }
        if (landscape.matches) {
            loadImagesLandscape(landscapeImage, 0);
        }


        
        var portraitImage = ["public/image/urban66.jpg","public/image/urban77.jpg",
        "public/image/urban88.jpg","public/image/urban99.jpeg","public/image/urban100.jpg"]
        
        // Loads the images one at a time, then calls the callback function when all images
        // have been loaded
        function loadImagesPortrait(portraitImage, index) {
            if (index < portraitImage.length) {
                let img = new Image();
                img.src = portraitImage[index];
                portraitImage[index] = img;
                loadImagesPortrait(portraitImage, ++index)
            } else {
                loadImagesPortrait(portraitImage);
            }
        }
        if (portrait.matches) {
            loadImagesPortrait(portraitImage, 0);
        }
        
        
        function PhotoSlider(){
            imgNum++;
            var localarea = document.getElementById("slider");
            
            if (landscape.matches){
                localarea.style.backgroundImage = `url(${landscapeImage[imgNum].src})`;
                if (imgNum == 4){
                    window.imgNum = -1;
                }
            }

            if(portrait.matches){
                localarea.style.backgroundImage = `url(${portraitImage[imgNum].src})`;
                if (imgNum == 4){
                    window.imgNum = -1;
                }
            }
        }

        function bodyload(){
            setInterval(PhotoSlider,4000);
            var localarea = document.getElementById("slider");
            var landscape = window.matchMedia("screen and (orientation:landscape)");
            var portrait = window.matchMedia("screen and (orientation:portrait)");
            
            if (landscape.matches){
                localarea.style.backgroundImage = `url(${landscapeImage[imgNum].src})`;
            }
            if(portrait.matches){
                localarea.style.backgroundImage = `url(${portraitImage[imgNum].src})`;
            }
            AutoDate();
        }
