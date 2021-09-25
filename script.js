getBirthdayName()

function getBirthdayName() {

    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))")
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))")
    let resultsSeg = regexSeg.exec(url);

  if (resultsName == null) {
birthdayName = "friend";
  } else {
    birthdayName = decodeURIComponent(resultsName[2]);
  }

    if (resultsSeg == null) {
      birthdaySeg = "general";

    } else {
    birthdaySeg = decodeURIComponent(resultsSeg[2]);

    }

if (birthdaySeg == "fundraisers"){
    document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>We at City of Hope want to wish you a very happy early birthday, " + birthdayName + "!<br><br> Your support enables all we do, thank you so much for being part of our community. <br><br>Have you considered celebrating your birthday by creating an ourHope fundraising page? You know just how easy it is to do, so this birthday inspire friends and family to give and make a difference by raising money to fight cancer and contribute to the lifesaving research and care provided only at City of Hope.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"

} else {
document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>We at City of Hope want to wish you a very happy early birthday, " + birthdayName + "!<br><br> Your support enables all we do, thank you so much for being part of our community.<br><br>  Did you know that you can celebrate your birthday by giving back? Create your ourHope page today and inspire friends and family to contribute to the lifesaving research and care provided only at City of Hope.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div></div>"

}

}