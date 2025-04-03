// var HolderName = document.getElementById("HolderName").value;
// var CardNumber = document.getElementById("CardNumber").value;
// var Month = document.getElementById("Month").value;
// var Year = document.getElementById("Year").value;
// var Cvv = document.getElementById("Cvv").value;
// var Email = document.getElementById("paypal-email").value;


function CardPayment(){
    var HolderName = document.getElementById("HolderName").value;
    var CardNumber = document.getElementById("CardNumber").value;
    var Month = document.getElementById("Month").value;
    var Year = document.getElementById("Year").value;
    var Cvv = document.getElementById("Cvv").value;


    if(HolderName == "" || CardNumber == "" || Month == "" || Year == "" || Cvv == ""){

        if(HolderName == "" ){
            document.getElementById("HolderName").style.borderColor = "#ff8f8f3d";
            document.getElementById("HolderName").style.backgroundColor = "#ff8f8f3d";
        }

        if (CardNumber == "") {
            document.getElementById("CardNumber").style.borderColor = "#ff8f8f3d";
            document.getElementById("CardNumber").style.backgroundColor = "#ff8f8f3d";
        }
        if (Month == "") {
            document.getElementById("Month").style.borderColor = "#ff8f8f3d";
            document.getElementById("Month").style.backgroundColor = "#ff8f8f3d";
        }
        if (Year == "") {
            document.getElementById("Year").style.borderColor = "#ff8f8f3d";
            document.getElementById("Year").style.backgroundColor = "#ff8f8f3d";
        }
        if (Cvv == "") {
            document.getElementById("Cvv").style.borderColor = "#ff8f8f3d";
            document.getElementById("Cvv").style.backgroundColor = "#ff8f8f3d";
        }
    }


    SpecailChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", "?", "/", "`", "~",0,1,2,3,4,5,6,7,8,9];

    allChars = [
        ...Array(26).keys().map(i => String.fromCharCode(i + 97)), // Lowercase letters (a-z)
        ...Array(26).keys().map(i => String.fromCharCode(i + 65)), // Uppercase letters (A-Z)
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/", "`", "~"
      ];



    const HolderNameArray = HolderName.split("");
    for (let i = 0; i < HolderNameArray.length; i++) {
        for (let j = 0; j < SpecailChar.length; j++) {
            if (HolderNameArray[i] == SpecailChar[j]) {
                document.getElementById("HolderName").style.borderColor = "#ff8f8f3d";
                document.getElementById("HolderName").style.backgroundColor = "#ff8f8f3d";
            }
        }
    }

    const CardNumberArray = CardNumber.split("");
    for (let i = 0; i < CardNumberArray.length; i++) {
        for (let j = 0; j < allChars.length; j++) {
            if (CardNumberArray[i] == allChars[j]) {
                document.getElementById("CardNumber").style.borderColor = "#ff8f8f3d";
                document.getElementById("CardNumber").style.backgroundColor = "#ff8f8f3d";
            }
        }
    }

    const MonthArray = Month.split("");
    for (let i = 0; i < MonthArray.length; i++) {
        for (let j = 0; j < allChars.length; j++) {
            if (MonthArray[i] == allChars[j]) {
                document.getElementById("Month").style.borderColor = "#ff8f8f3d";
                document.getElementById("Month").style.backgroundColor = "#ff8f8f3d";
            }
        }
    }

    if ( 1 <= Month && Month <= 12 ) {

        const YearArray = Year.split("");
            for (let i = 0; i < YearArray.length; i++) {
                for (let j = 0; j < allChars.length; j++) {
                    if (YearArray[i] == allChars[j]) {
                        document.getElementById("Year").style.borderColor = "#ff8f8f3d";
                        document.getElementById("Year").style.backgroundColor = "#ff8f8f3d";
                    }
                }
            }

            if(YearArray.length != 2){
                document.getElementById("Year").style.borderColor = "#ff8f8f3d";
                document.getElementById("Year").style.backgroundColor = "#ff8f8f3d";
            }
        
            if(1 <= Year <= 50){
                const CvvArray = Cvv.split("");
                for (let i = 0; i < CvvArray.length; i++) {
                    for (let j = 0; j < allChars.length; j++) {
                        if (CvvArray[i] == allChars[j]) {
                            document.getElementById("Cvv").style.borderColor = "#ff8f8f3d";
                            document.getElementById("Cvv").style.backgroundColor = "#ff8f8f3d";
                        }
                    }
                }
                
                if(CvvArray.length != 3){
                    document.getElementById("Cvv").style.borderColor = "#ff8f8f3d";
                    document.getElementById("Cvv").style.backgroundColor = "#ff8f8f3d";
                }
            }
        
            // else{
            //     document.getElementById("Year").style.borderColor = "#ff8f8f3d";
            //     document.getElementById("Year").style.backgroundColor = "#ff8f8f3d";
            // }
    }
    else{
        document.getElementById("Month").style.borderColor = "#ff8f8f3d";
        document.getElementById("Month").style.backgroundColor = "#ff8f8f3d";
    }


    
console.log(HolderName);
console.log(CardNumber);
console.log(Month);
console.log(Year);
console.log(Cvv);

}



function PayPalPayment(){
    var Email = document.getElementById("paypal-email").value;

    if(Email == ""){
            document.getElementById("paypal-email").style.borderColor = "#ff8f8f3d";
            document.getElementById("paypal-email").style.backgroundColor = "#ff8f8f3d";
    }

    const EmailArray = Email.split("");

    for (let i = 0; i < EmailArray.length; i++) {
        if (!EmailArray.includes("@" && ".")) {
            document.getElementById("paypal-email").style.borderColor = "#ff8f8f3d";
            document.getElementById("paypal-email").style.backgroundColor = "#ff8f8f3d";
        }
    }
}