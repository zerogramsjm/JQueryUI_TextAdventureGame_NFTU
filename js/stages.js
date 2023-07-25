  $(document).ready(function(){
    var ic=false;
    $("#ttinput").click(function() {
      ic=true;
      setTimeout(function(){
        ic=false;
      },100);
    })

    $(document).click(function(event) {
      if(ic==true){
        $("#cursor").show();
        $("#termtitlebar").css("background-color", "black");
      }else{
        $("#cursor").hide();
        $("#termtitlebar").css("background-color", "grey");
      }
    })

    var dooropen = document.getElementById("dooropen");
    var d1=0; var d2=0;
    var floor12 = document.getElementById("floor12");
    var f1=0;
    var dustfiltration = document.getElementById("dustfiltration");
    var df1=0;
    var takeoffheadset = document.getElementById("takeoffheadset");
    var to1=0;
    var vrerror = document.getElementById("vrerror");
    var vr1=0;

    var ia, oa;
    sc=0;
    dc=0;

    var tt=document.getElementById("ttinput");
    var nf=0;
    var ov=0;

    // NEXT SCENE ANSWERS
    var FO=7;
    
    // INTO DOOR ANSWERS
    var DA=8;
    var DB=9;
    var DC=10;

    // PREVIOUS SCENE ANSWERS
    var BO=11;

    // COMBINE ITEMS ANSWERS
    var CO=12;

    // SCENE (NOT IN DOORS) ITEMS DISCOVERED
    var CND1=14;
    var CND2=16;
    var CND3=18;

    //HIGH CONTRAST ESCAPE KEYS
    var CEY=19;
    var CEN=20;

    // COLLECTED ALL ITEMS 01
    var all_s_1_items;
        all_s_1_items=false;
    // STAGE ITEMS COMBINED 01
      var s_1_i_combined;
          s_1_i_combined=false;

    // COLLECTED ALL ITEMS 02
    var all_s_2_items;
        all_s_2_items=false;
    // STAGE ITEMS COMBINED 02
      var s_2_i_combined;
          s_2_i_combined=false;

    document.onkeypress=function (event) {

    // $("#dwcterminal").scrollTop($("#ttinputdiv")[0].scrollHeight);

    if (event.keyCode===13) {
      $("#dwcterminal").scrollTop($("#ttoutput")[0].scrollHeight-75);
      nf=0;
      if(document.getElementById("ttinput").value==''){
        $("#ttoutput").append("> "+"unknown command");
      }
      var textarea=document.getElementById('ttinput');
      $("#ttoutput").append($("#ttinput").val()+"<br/>");
      var textValue=textarea.value;
      var mntv=textValue.replace("the ", "");

      var mntvv=mntv.replace("enter elevator", "open elevator");

      // GENERIC
      var mntvvv=mntvv.replace("place", "use");
      
      // GENERIC
      var mntvvvv=mntvvv.replace("matchstick", "match");

      // OPEN DOOR ON FLOOR 2
      var mntvvvvv;
      if (sc==11){
      mntvvvvv=mntvvvv.replace("enter door", "open door");
      }else{
      mntvvvvv=mntvvvv.replace("4154_c0n", "4154_con");
      }

      // GENERIC
      var mntvvvvvv=mntvvvvv.replace("look at room", "look around room");
      
      // PICK UP ITEMS 
      var mntvvvvvvv=mntvvvvvv.replace("get", "take");
      var mntvvvvvvvv=mntvvvvvvv.replace("pick up", "take");
      
      // STICKING ITEMS
      var mntvvvvvvvvv=mntvvvvvvvv.replace("stick motherboard to panel", "use motherboard on panel");
      var mntvvvvvvvvvv=mntvvvvvvvvv.replace("stick motherboard onto panel", "use motherboard on panel");

      //COMBINING
      var mntvvvvvvvvvvv=mntvvvvvvvvvv.replace("combine motherboard and gum", "use gum and motherboard");
      var mntvvvvvvvvvvvv=mntvvvvvvvvvvv.replace("combine motherboard with gum", "use gum and motherboard");
      var mntvvvvvvvvvvvvv=mntvvvvvvvvvvvv.replace("combine gum with motherboard", "use gum and motherboard");
      var mntvvvvvvvvvvvvvv=mntvvvvvvvvvvvvv.replace("combine gum and motherboard", "use gum and motherboard");

      // HEADSET
      var mntvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvv.replace("put on headset", "use headset");

      // WAREHOUSE
      var mntvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvv.replace("enter warehouse", "enter door");

      var mntvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvv.replace("go to warehouse", "walk to door");
      var mntvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvv.replace("go to door", "walk to door");
      var mntvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvv.replace("walk to warehouse", "walk to door");

      // BUTTONS
      var mntvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvv.replace("press floor up button", "press floor up");
      var mntvvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvvv.replace("press floor 12 button", "press floor 12");

      // COMPUTERS
      var mntvvvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvvvv.replace("look at monitors", "look at computer");
      var mntvvvvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvvvvv.replace("look at computers", "look at computer");
      var mntvvvvvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvvvvvv.replace("turn off monitors", "turn off computer");
      var mntvvvvvvvvvvvvvvvvvvvvvvvvv=mntvvvvvvvvvvvvvvvvvvvvvvvv.replace("turn off computers", "turn off computer");

        // UPSTAIRS  - - - - - - - - -

      // COMBINING
      var mntv2=mntvvvvvvvvvvvvvvvvvvvvvvvvv.replace("combine bin bag and hose and spring", "use items");
      var mntvv2=mntv2.replace("combine hose and bin bag and spring", "use items");
      var mntvvv2=mntvv2.replace("combine spring and bin bag and hose", "use items");

      var mntvvvv2=mntvvv2.replace("combine spring with bin bag with hose", "use items");
      var mntvvvvv2=mntvvvv2.replace("combine hose with bin bag with spring", "use items");
      var mntvvvvvv2=mntvvvvv2.replace("combine bin bag with hose with spring", "use items");

      // EXITING
      var mntvvvvvvv2=mntvvvvvv2.replace("exit room", "leave room");
      var mntvvvvvvvv2=mntvvvvvvv2.replace("exit door", "leave room");

      // FURTHER COMBINING
      var mntvvvvvvvvv2=mntvvvvvvvv2.replace("combine all items", "use items");
      var mntvvvvvvvvvv2=mntvvvvvvvvv2.replace("combine all items", "use items");
      var mntvvvvvvvvvvv2=mntvvvvvvvvvv2.replace("combine items", "use items");

      // PAINTING
      var mntvvvvvvvvvvvv2=mntvvvvvvvvvvv2.replace("look at cat painting", "look at painting");

        // DOWNSTAIRS AGAIN  - - - - - - - - -

      // DOORS
      var mntvvvvvvvvvvvvv2=mntvvvvvvvvvvvv2.replace("enter first door", "open door 1");
      var mntvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvv2.replace("enter second door", "open door 2");
      var mntvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvv2.replace("enter third door", "open door 3");

      var mntvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvv2.replace("open first door", "open door 1");
      var mntvvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvvv2.replace("open second door", "open door 2");
      var mntvvvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvvvv2.replace("open third door", "open door 3");

      var mntvvvvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvvvvv2.replace("enter door 1", "open door 1");
      var mntvvvvvvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvvvvvv2.replace("enter door 2", "open door 2");
      var mntvvvvvvvvvvvvvvvvvvvvvvv2=mntvvvvvvvvvvvvvvvvvvvvv2.replace("enter door 3", "open door 3");

      // MATCH IN GAP

      var mntv3=mntvvvvvvvvvvvvvvvvvvvvvvv2.replace("put match in gap", "use match in gap");
      var mntvv3=mntv3.replace("enter match in gap", "use match in gap");
      var mntvvv3=mntvv3.replace("enter match in slot", "use match in gap");
      var mntvvvv3=mntvvv3.replace("put match in slot", "use match in gap");

      // DUST FILTRATION UNIT

      var mntvvvvv3=mntvvvv3.replace("turn on dust unit", "turn on unit");
      var mntvvvvvv3=mntvvvvv3.replace("turn on dust filtration unit", "turn on unit");

      // COMBINING 2 ITEMS AT THE DUSTY ROOM

      var mntvvvvvvv3=mntvvvvvv3.replace("combine spring and bin bag", "combine 2 items");
      var mntvvvvvvvv3=mntvvvvvvv3.replace("combine bin bag and spring", "combine 2 items");
      var mntvvvvvvvvv3=mntvvvvvvvv3.replace("combine hose and spring", "combine 2 items");
      var mntvvvvvvvvvv3=mntvvvvvvvvv3.replace("combine spring and hose", "combine 2 items");
      var mntvvvvvvvvvvv3=mntvvvvvvvvvv3.replace("combine spring and bin bag", "combine 2 items");
      var mntvvvvvvvvvvvv3=mntvvvvvvvvvvv3.replace("combine bin bag and spring", "combine 2 items");

      // MORE MATCH IN GAP

      var mntvvvvvvvvvvvvv3=mntvvvvvvvvvvvv3.replace("combine match in slot", "use match in gap");
      var mntvvvvvvvvvvvvvv3=mntvvvvvvvvvvvvv3.replace("combine match in button", "use match in gap");
      var mntvvvvvvvvvvvvvvv3=mntvvvvvvvvvvvvvv3.replace("combine match in gap", "use match in gap");
      var mntvvvvvvvvvvvvvvvv3=mntvvvvvvvvvvvvvvv3.replace("enter match in button", "use match in gap");

      // MORE COMBINING 2 ITEMS AT THE DUSTY ROOM

      var mntv4=mntvvvvvvvvvvvvvvvv3.replace("combine spring with bin bag", "combine 2 items");
      var mntvv4=mntv4.replace("combine bin bag with spring", "combine 2 items");
      var mntvvv4=mntvv4.replace("combine hose with spring", "combine 2 items");
      var mntvvvv4=mntvvv4.replace("combine spring with hose", "combine 2 items");
      var mntvvvvv4=mntvvvv4.replace("combine spring with bin bag", "combine 2 items");
      var mntvvvvvv4=mntvvvvv4.replace("combine bin bag with spring", "combine 2 items");

      // GUM AND MOTHERBOARD

      var mntv5=mntvvvvvv4.replace("stick gum to motherboard", "use gum and motherboard");
      var mntvv5=mntv5.replace("stick motherboard to gum", "use gum and motherboard");

      // TILE

      var mntvvv5=mntvv5.replace("take tile", "look at tile");

      // PRESS FLOOR 12 BUTTONS

      var mntvvvv5=mntvvv5.replace("press button 12", "press floor 12");

      // MORE GUM AND MOTHERBOARD
      
      var mntvvvvv5=mntvvvv5.replace("stick motherboard on gum", "use gum and motherboard");
      var mntvvvvvv5=mntvvvvv5.replace("stick gum on motherboard", "use gum and motherboard");

      // MORE MOTHERBOARD TO PANEL

      var mntvvvvvvv5=mntvvvvvv5.replace("stick gum on panel", "use motherboard on panel");
      var mntvvvvvvvv5=mntvvvvvvv5.replace("stick gum to panel", "use motherboard on panel");
      var mntvvvvvvvvv5=mntvvvvvvvv5.replace("stick motherboard on panel", "use motherboard on panel");

      // ROOM AND DOOR

      var mntvvvvvvvvvv5=mntvvvvvvvvv5.replace("enter room 1", "open door 1");
      var mntvvvvvvvvvvv5=mntvvvvvvvvvv5.replace("enter room 2", "open door 2");
      var mntvvvvvvvvvvvv5=mntvvvvvvvvvvv5.replace("enter room 3", "open door 3");

      // MATCH AND GAP

      var mntvvvvvvvvvvvvv5=mntvvvvvvvvvvvv5.replace("put match into gap", "use match in gap");
      var mntvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvv5.replace("place match into gap", "use match in gap");

      var mntvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvv5.replace("put match on gap", "use match in gap");
      var mntvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvv5.replace("put match onto gap", "use match in gap");

      // MORE GUM AND MOTHERBOARD

      var mntvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvv5.replace("put motherboard onto gum", "use gum and motherboard");
      var mntvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvv5.replace("put gum onto motherboard", "use gum and motherboard");

      var mntvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvv5.replace("put gum on motherboard", "use gum and motherboard");
      var mntvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvv5.replace("put motherboard on gum", "use gum and motherboard");

      // MOTHERBOARD ON PANEL

      var mntvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvv5.replace("put motherboard on panel", "use motherboard on panel");

      // MORE 2 ITEMS ON FLOOR 2

      var mntvvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvvv5.replace("combine hose and bin bag", "combine 2 items");
      var mntvvvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvvvv5.replace("combine bin bag and hose", "combine 2 items");

      // MORE DUST FILTRATION UNIT

      var mntvvvvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvvvvv5.replace("use dust filtration unit", "turn on unit");
      var mntvvvvvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvvvvvv5.replace("use dust unit", "turn on unit");
      var mntvvvvvvvvvvvvvvvvvvvvvvvvvv5=mntvvvvvvvvvvvvvvvvvvvvvvvvv5.replace("use unit", "turn on unit");

      var iaLength=ia.length;
      for(var i=0;i<iaLength;i++){
        if(mntvvvvvvvvvvvvvvvvvvvvvvvvvv5.match(ia[i])){
          ov=jQuery.inArray(ia[i],ia);
          if(dc==1&&ov==DA||dc==2&&ov==DA||dc==3&&ov==DA){inv();}
          if(dc==0){  if(ov==FO){sc+=1;}
                      if(ov==DA){dc+=1;
                        var dos = document.createElement("audio");
                        dos.src = "sound/dooropen.mp3";
                        dos.play();
                      }
                      if(ov==DB){dc+=2;
                        var dos = document.createElement("audio");
                        dos.src = "sound/dooropen.mp3";
                        dos.play();
                      }
                      if(ov==DC){dc+=3;
                        var dos = document.createElement("audio");
                        dos.src = "sound/dooropen.mp3";
                        dos.play();
                      }
                    }
                      if(ov==CO){comb();}
                      if(ov==CO){sc+=1;dc=0;}
                  if(ov==BO){dc=0;}
                  if(ov==CND1){dc+=1};
                  if(ov==CND2){dc+=2};
                  if(ov==CND3){dc+=3};
                    if(dc==1&&ov==CND1||dc==2&&ov==CND2||dc==3&&ov==CND3){inv();}
                  if(ov==CEY){setTimeout(function(){game_over();},2000)}
                  if(ov==CEN){sc+=1};
          $("#ttoutput").append("> "+oa[ov]+"<br/>");
          nf=1;
          ovw();
        }
        document.getElementById('ttinput').value="";
      }
      if (mntvvvvvvvvvvvvvvvvvvvvvvvvvv5.toLowerCase().indexOf(ia[i])===-1){
        nf+=1;
      }
      if(nf==1){
        $("#ttoutput").append("> "+"unknown command"+"<br/>");
      }
      console.log("IN SCENE: "+sc);
      console.log("IN DOOR: "+dc);
    }

    // STAGE 0 - - - - - - - -

    if (sc==0){
      ia=[
            c0="look at door", 
            c1="look at warehouse",
            c2="look right",
            c3="enter door",
            c4="open door",
            c5="look back",
            c6="help",
         c7="walk to door",
    //     c7="1"
        ];
      oa=[
            a0="you are not close enough",
            a1="you are outside a warehouse on a desolate industrial estate. You received a text message from an unknown number about there being a rave here but you can not hear any music. Come to think of it, there are not any vehicles parked outside either. Feeling a chill in the air, you look over the bleak building in front of you. All the windows are sealed up with metal covers. The only way into this warehouse is a large metal door that seems to be controlled by a small electronic panel next to it.",
            a2="desolate empty, too dark to even see",
            a3="you need to open the door first",
            a4="you need to unlock the door first",
            a5="too cold to walk that far back!",
            a6="type your commands and make your way to HC",
          a7="You stop in front of the large metal door. To its right is a small electronic panel."
        ];
      }

    // STAGE 1 - - - - - - - -

    if (sc==1){
      ia=[
            c0="knock on door", 
            c1="look at warehouse",
            c2="kick door",
            c3="enter door",
            c4="open door",
            c5="look at door",
            c6="help",
           c7="look at panel",
    //     c7="1"
        ];
      oa=[
            a0="there is no answer", 
            a1="you are outside a warehouse on a desolate industrial estate. You received a text message from an unknown number about there being a rave here but you can not hear any music. Come to think of it, there are not any vehicles parked outside either. Feeling a chill in the air, you look over the bleak building in front of you. All the windows are sealed up with metal covers. The only way into this warehouse is a large metal door that seems to be controlled by a small electronic panel next to it.",
            a2="the door kicks you back, -1 health",
            a3="you need to open the door first",
            a4="you need to unlock the door first",
            a5="You've reached a huge metal door, to the right there is a small electronic panel next to items",
            a6="type your commands and make your way to HC",
          a7="If you’re familiar with Notes from the Underground, you’ll know what passcode to use."
        ];
      }

    // STAGE 2 - - - - - - - -

    if (sc==2){
      ia=[
            c0="knock on door", 
            c1="turn back",
            c2="kick door",
            c3="look up",
            c4="look down",
            c5="help",
            c6="open door",
           c7="4154_con"
    //     c7="1"
        ];
      oa=[
            a0="there is no answer", 
            a1="there is nothing back there",
            a2="the door kicks you back, -1 health",
            a3="infinite cloud space my dude",
            a4="glad you've got your dancing boots on ready for the rave, it's freezing out!",
            a5="type your commands and make your way to HC",
            a6="the door is locked",
          a7="the panel beeps once following a loud clanking sound unlocking the door"
        ];
      }

    // STAGE 3 - - - - - - - -

    if (sc==3){
      ia=[
            c0="look at door", 
            c1="turn back",
            c2="kick door",
            c3="look up",
            c4="look down",
            c5="look back",
            c6="help",
           c7="open door"
    //     c7="1"
        ];
      oa=[
            a0="it's now open, what will you do?", 
            a1="there is nothing back there",
            a2="the door kicks you back, -1 health",
            a3="dimly lit flourescent lights flicker",
            a4="glad you've got your dancing boots on ready for the rave, it's freezing out!",
            a5="locked door",
            a6="type your commands and make your way to HC",
          a7="The warehouse door is now open to you."
        ];
      }

    // STAGE 4 - - - - - - - -

    if (sc==4){
      ia=[
            c0="look at door", 
            c1="turn back",
            c2="kick door",
            c3="look up",
            c4="look down",
            c5="look back ",
            c6="help",
           c7="enter door"
    //     c7="1"
        ];
      oa=[
            a0="it's now open, what will you do?", 
            a1="there is nothing back there",
            a2="the door kicks you back, -1 health",
            a3="dimly lit flourescent lights flicker",
            a4="glad you've got your dancing boots on ready for the rave, it's freezing out!",
            a5="locked door",
            a6="type your commands and make your way to HC",
          a7="You are in a dimly lit corridor. A fluorescent strip-light flickers above you. There are three doorways in front of you.",
        ];
      }

    // STAGE 5 - - - - - - - -

    if (sc==5){
      if (d1==0) {
        dooropen.play();
        d1=1;
      }
      ia=[
            c0="look at doors", 
            c1="turn back",
            c2="open a door",
            c3="look at painting",
            c4="look at bin",
            c5="look back",
            c6="help",
           c7="--",
      //     c7="1",
        c8="open door 1",
        c9="open door 2",
        c10="open door 3"
        ];
      oa=[
            a0="where are you going?", 
            a1="there is nothing back there",
            a2="but which one?",
            a3="A delightful painting, you're sure you've seen it before",
            a4="nothing to see here",
            a5="locked door",
            a6="type your commands and make your way to HC",
          a7="",
        a8="You are in what looks like a very messy office. There is a desk covered in scribbled notes. Scraps of paper and post-it notes cover the walls. There are diagrams and equations and strange patterns of text that look quite alien to you. They look like the working-out of a very complex problem but quite what that problem could be seems unfathomable.",
        a9="You are in some kind of control room. Banks of computers form a virtual maze in front of you. There are a vast array of computer types and models, with server units scattered around for good measure. Some of the monitors are still on",
        a10="You are in a small room that hosts the elevator. A panel of numbered buttons control it’s movements but it doesn’t seem to be working at the moment. The floor is sticky",
        ];
      }

          // STAGE 5 DOOR 1 - - - - - - - -

          if (sc==5&&dc==1){
            ia=[
              c0="look around room", 
              c1="kick all paper",
              c2="think hard",
              c3="organise paper",
              c4="look at notes",
              c5="look at desk",
              c6="help",
              c7="open drawer",
            c8="take matches",
              c9="--",
              c10="--",
            c11="leave room"
              ];
            oa=[
              a0="notes everywhere!", 
              a1="paper flies everywhere",
              a2="don't hurt yourself",
              a3="it becomes apparent there's a recognisable shape beneath the mess but you don't understand yet. Scribblings of stickmen and machines",
              a4="the shape is definitely in there, strange images and scribblings of code. You find one ripped sheet with a stick figure and the start of an arrow pointing to the right",
              a5="There are matches on the desk. There is also a partially open drawer.",
              a6="type your commands and make your way to HC",
              a7="The draw contains a crumpled post-it note, you uncrumple it. Its a drawing of a number 1 on fire",
            a8="you've taken the matches, there only seems to be one match in the box. ",
                a9="--",
              a10="--",
            a11="you're back in the corridor",
              ];
            }

          // STAGE 5 DOOR 2 - - - - - - - -

          if (sc==5&&dc==2){
            ia=[
                c0="look at computer", 
                c1="turn off computer",
                c2="look under wires",
                c3="--",
                c4="look down",
                c5="look at floor",
                c6="look around room",
                c7="--",
              c8="take motherboard",
                c9="--",
                c10="--",
            c11="leave room"
              ];
            oa=[
                a0="you see a dim flashing light under some wires", 
                a1="You can now see your reflection in the blank monitor screen. Over your shoulder you notice one drawing on the wall behind you in particular - it shows an arrow pointing towards a crude drawing of a computer. You make a mental note of it.",
                a2="a motherboard panel is hanging out the back of a monitor, it has a blinking light",
                a3="You can now see your reflection in the blank monitor screen. Over your shoulder you notice one drawing on the wall behind you in particular - it shows an arrow pointing towards a crude drawing of a computer. You make a mental note of it.",
                a4="you see a dim flashing light under some wires",
                a5="you see a dim flashing light under some wires",
                a6="you see a dim flashing light under some wires",
                a7="--",
              a8="you've pocketed the motherboard, you were careful detatching it to not disrupt any components",
                a9="--",
              a10="--",
            a11="you're back in the corridor",
              ];
            }

            // STAGE 5 DOOR 3 - - - - - - - -

          if (sc==5&&dc==3){
          // IF STAGE 1 ITEMS ARE NOT COMBINED NO
            ia=[
                  c0="look at buttons", 
                  c1="look at panel",
                  c2="look at elevator",
                  c3="look at floor",
                  c4="look down",
                  c5="look around room",
                  c6="stick motherboard to panel",
                  c7="--",
                c8="take gum",
                  c9="--",
                  c10="--",
              c11="leave room",
              ];
            oa=[
                  a0="The buttons to open the elevator are not lit. The panel is cracked open in one corner and you can see there is a component missing from the electronics inside it", 
                  a1="The buttons to open the elevator are not lit. The panel is cracked open in one corner and you can see there is a component missing from the electronics inside it",
                  a2="The buttons to open the elevator are not lit. The panel is cracked open in one corner and you can see there is a component missing from the electronics inside it",
                  a3="there's gum stuck to the floor",
                  a4="there's gum stuck to the floor",
                  a5="The floor is sticky, the walls are dirty and the lights flicker above you. The elevator looks out of order.",
                  a6="it won’t stay on the panel…",
                  a7="--",
                a8="you peel off the gum from your shoe, it's still a little sticky, this may come in useful. It does have some hairs stuck to it though, gross.",
                  a9="--",
                  a10="--",
              a11="you're back in the corridor",
              ];
            }

      
          if (g_motherboard==true&&g_matches==true&&g_gum==true) {
            all_s_1_items=true;
            console.log("i have all items from stage 1")
          }

          // IF STAGE 1 ITEMS ARE COMBINES YES
          if (all_s_1_items==true&&dc==3){
            ia=[
              c0="--",
              c1="--",
              c2="look at elevator",
              c3="look at panel",
              c4="--",
              c5="--",
              c6="--",
              c7="--",
              c8="--",
              c9="--",
              c10="--",
              c11="--",
            c12="use gum and motherboard"
              ];
            oa=[
              a0="--",
              a1="--",
              a2="The buttons to open the elevator are not lit, there's a small gap in the middle of them where it looks like it is missing a key component",
              a3="the panel of buttons for the elevator seems to broken, perhaps an item can be stuck there",
              a4="--",
              a5="--",
              a6="--",
              a7="--",
              a8="--",
              a9="--",
              a10="--",
              a11="--",
            a12="the gum is now stuck to the motherboard"
              ];
          }

    // STAGE 6 - - - - - - - -

    if (sc==6){
      ia=[
          c0="--",c1="--",c2="--",c3="--",c4="--",c5="--",
          c6="help",
          c7="use motherboard on panel",
   //     c7="1",
        ];
      oa=[
          a0="--",a1="--",a2="--",a3="--",a4="--",a5="--",
          a6="type your commands and make your way to HC",
        a7="The gum has stuck the motherboard into place on the panel, the 'Floor Up' button lights up" 
        ];
    }

      // STAGE 7 - - - - - - - -

    if (sc==7){
      $("#gummotherboard").hide();
      ia=[
          c0="press button",c1="--",c2="--",c3="--",c4="--",c5="--",
          c6="help",
          c7="press floor up",
    //     c7="1",
        ];
      oa=[
          a0="which button",a1="--",a2="--",a3="--",a4="--",a5="--",
          a6="type your commands and make your way to HC",
        a7="The elevator doors slide open slowly" 
        ];
      }

      // STAGE 8 - - - - - - - -

    if (sc==8){
      ia=[
          c0="--",c1="--",c2="--",c3="--",c4="--",c5="--",
          c6="help",
         c7="open elevator",
    //     c7="1",
        ];
      oa=[
          a0="--",a1="--",a2="--",a3="--",a4="--",a5="--",
          a6="type your commands and make your way to HC",
        a7="You've stepped inside the elevator, it's creaky even when not moving. One of the ceiling tiles overhead is broken. There's a panel of floor buttons ranging from G to floor 12" 
        ];
      }

      // STAGE 9 - - - - - - - -

    if (sc==9){
      ia=[
          c0="look at buttons",
          c1="press floor 12",
          c2="look at tile",
          c3="press button",
          c4="look at panel",
          c5="look at floor buttons",
          c6="Look at floor 12 button",
        c7="use match in gap",
    //     c7="1",
        ];
      oa=[
          a0="all of the buttons are unlit except for the 'floor 12' which is flashing, there is a gap where the '1 'once sat in the number '12' on the button, hmm",
          a1="you press floor 12 but nothing happens",
          a2="It looks loose, best not to mess with it",
          a3="but which button",
          a4="all of the buttons are unlit except for the 'floor 12' which is flashing, there is a gap where the '1 'once sat in the number '12' on the button, hmm",
          a5="there is a gap where the '1 'once sat in the number '12' on the button, hmm",
          a6="there is a gap where the '1 'once sat in the number '12' on the button, hmm",
        a7="The match fits perfectly, the button is now completely lit up" 
        ];
      }

      // STAGE 10 - - - - - - - -

    if (sc==10){
      $("#match").hide();
      ia=[
          c0="press button",c1="--",c2="--",c3="--",c4="--",c5="--",
          c6="help",
          c7="press floor 12",
      //     c7="1",
        ];
      oa=[
          a0="which button",a1="--",a2="--",a3="--",a4="--",a5="--",
          a6="type your commands and make your way to HC",
        a7="The elevator shudders violently as the doors creak shut in front of you, causing a broken panel above you to fall and ding your head. ‘Ouch’ you exclaim, to no one. You feel sleepy after the knock on your head and the lilting of the elevator as it very slowly rises makes you close your eyes for a moment. Suddenly, a ‘ding’ sound wakes you up. You’ve reached the 12th floor. As the elevator doors slowly open, a plume of dust makes you cough. You step out into a desolate looking hallway." 
        ];
      }

      // STAGE 11 - - - - - - - -

    if (sc==11){
      if (f1==0) {
        var f12s = document.createElement("audio");
        f12s.src = "sound/floor12.mp3";
        f12s.play();
        f1=1;
      }
      ia=[
          c0="open elevator",
          c1="walk forward",
          c2="look around room",
          c3="look at door",
          c4="look at hallway",
          c5="look down",
          c6="help",
        c7="open door",
    //     c7="1",
        ];
      oa=[
          a0="you dont need to go downstairs at the moment",
          a1="you step foot into the dust cloud, you can't see anything but the neon glow through the crack in the door now slightly to your right as you stand in the corridor",
          a2="This floor looks pretty desolate. It's so dark and dusty you can't make much out but there is a strange glowing light coming from a door in front of you that is slightly ajar",
          a3="so mega dusty you can't see a thing! All you hear is a loud whiring from inside the neon door!",
          a4="This floor looks pretty desolate. It's so dark and dusty you can't make much out but there is a strange glowing light coming from a door in front of you that is slightly ajar",
          a5="you search around the floor, you've found a wallet embossed HC, why would this be lying around on the floor?",
          a6="type your commands and make your way to HC",
        a7="You push open the door and enter a room even more dusty and dark than the hallway. You can just about make out a desk, sitting on which is what you assume is some kind of hi-tec gaming computer. There is a VR headset connected to it which looks like it was hacked together from a few old consoles and various home appliances.",
        ];
      }

      // STAGE 12 - - - - - - - -

    if (sc==12){
      if (d2==0) {
        dooropen.play();
        d2=1;
      }
      ia=[
          c0="smell air",
          c1="walk forward",
          c2="go back",
          c3="look around",
          c4="look at computer fans",
          c5="inspect computer",
          c6="help",
        c7="use headset",
     //     c7="1",
        ];
      oa=[
          a0="smells musty, a thick fog almost. It can't be doing the computer any good!",
          a1="there's simply a desk infront of you, no space to move much in here, it's boiling hot from the large whiring computer system and room full dust, I wonder how the computers fans are handling this?",
          a2="the door is shut behind you, you know there's nothing back there",
          a3="It's incredibly dusty, but you can make out the shape of the desk lit from the monitor! A big by the desk and a fancy office chair. The computer sounds extremely loud, it could be clogged with dust!",
          a4="they're going 1000%, it's definitely all of this dust making them go crazy! We need to clean out the air in here",
          a5="the monitor reads, 'heating error', the fog and dust must be clogging up the fans. We need to clean out the air in here!",
          a6="type your commands and make your way to HC",
        a7="The viewport screen in the headset reads ‘Heating Error’. The dust must be clogging the cooling fans on all this equipment causing the error",
        ];
      }

      // STAGE 13 - - - - - - - -

    if (sc==13){
      if (vr1==0) {
        var ves = document.createElement("audio");
        ves.src = "sound/verror.mp3";
        ves.play();
        vr1=1;
      }
      ia=[
          c0="--",
          c1="--",
          c2="--",
          c3="--",
          c4="--",
          c5="--",
          c6="--",
        c7="take off headset",
     //     c7="1",
        ];
      oa=[
        a0="--",a1="--",a2="--",a3="--",a4="--",a5="--",a6="--", a7="You've taken off the headset, now find a way to clear out all of this dust."
        ];
      }

      // STAGE 14 - - - - - - - -

    if (sc==14){
      if (all_s_2_items==false) {
        ia=[
              c0="combine 2 items",
              c1="look at desk",
              c2="look at chair",
              c3="use headset",
              c4="look in bin",
              c5="inspect computer",
              c6="help",
              c7="--",
          //     c7="1",
              c8="--",
              c9="--",
              c10="--",
              c11="--",
              c12="--",
          c13="--",
            c14="take spring",
          c15="look under desk",
            c16="take hose",
          c17="look at bin",
            c18="take bin bag",
          ];
        oa=[
            a0="That's a good idea, but it looks like you're missing an item!",
            a1="there's a series of plugs connecting to the all computers leading under the desk. There is a bin next to the desk",
            a2="it's a hi tec gaming chair, very ergonomic, good for a creative type who spends hours or days working on perfecting their masterpiece. But it's very worn, there's a spring protruding from the upholstery",
            a3="the 2 viewport screens in the headset read 'heating error' the fog and dust must be clogging up the fans. We need to clean out the air in here!",
            a4="there is an empty bin bag",
            a5="the monitor reads, 'heating error', the fog and dust must be clogging up the fans. We need to clean out the air in here!",
            a6="type your commands and make your way to HC",
          a7="",
            a8="--",
            a9="--",
            a10="--",
            a11="--",
            a12="--",
          a13="",
            a14="you've pulled the spring from the innerds of the upholstry",
          a15="there's series of quite messy cables, all leading through the floor into various power sources and internet connection. One looks somewhat like a hose, it doesn't seem to be connected to anything!",
            a16="you've taken the hose from under the desk",
          a17="there is an empty bin bag",
            a18="You've taken the bin bag from the bin",
          ];
        }

          if (g_spring==true&&g_hose==true&&g_bag==true) {
            all_s_2_items=true;
            console.log("i have all items from stage 2")
          }
      }

          if (all_s_2_items==true) {
            ia=[
              c0="combine 2 items",c1="--",c2="--",c3="--",c4="--",c5="--",c6="--",
              c7="--",
          //     c7="1",
              c8="--",c9="--",c10="--",
              c11="leave the door",
            c12="use items"
              ];
            oa=[
              a0="That's a good idea, but it looks like you're missing an item!",a1="what will you do with the items?",a2="",a3="what will you do with the items?",a4="what will you do with the items?",a5="what will you do with the items?",a6="what will you do with the items?",
              a7="what will you do with the items?",
              a8="what will you do with the items?",a9="what will you do with the items?",a10="what will you do with the items?",
              a11="you're back in the corridor",
            a12="You’ve constructed a rudimentary dust filtration unit which should clear the dusty air in this room and allow the computers to function.",
              ];
          }

      // STAGE 15 - - - - - - - -

    if (sc==15){
      ia=[
          c0="--",c1="--",c2="--",c3="--",c4="--",c5="--",
          c6="help",
        c7="turn on unit",
     //     c7="1",
        ];
      oa=[
          a0="--",a1="--",a2="--",a3="--",a4="--",a5="--",
          a6="Type your commands and make your way to HC",
        a7="The air immediately starts to clear and soon you hear the cooling fans slow down on the computers. The error message disappears from the headset, it should work now." 
        ];
    }

      // STAGE 16 - - - - - - - -

    if (sc==16){
      $("#filter").hide();
      if (df1==0) {
        var dfs = document.createElement("audio");
        dfs.src = "sound/dustfiltration.mp3";
        dfs.play();
        df1=1;
      }
      ia=[
          c0="--",
          c1="--",
          c2="--",
          c3="--",
          c4="--",
          c5="--",
          c6="help",
       c7="use headset",
   //     c7="1",
         ];
      oa=[
          a0="--",
          a1="--",
          a2="--",
          a3="--",
          a4="--",
          a5="--",
          a6="type your commands and make your way to HC",
        a7="As you wait for something to happen on the viewport screen, you start to feel self-conscious. Maybe it’s not the time for a bit of gaming, why not try and find HC instead?",
        ];
      }

      // STAGE 17 - - - - - - - -

    if (sc==17){
      ia=[
          c0="--",
          c1="--",
          c2="--",
          c3="--",
          c4="--",
          c5="--",
          c6="help",
        c7="take off headset",
   //     c7="1",
         ];
      oa=[
          a0="--",
          a1="--",
          a2="--",
          a3="--",
          a4="--",
          a5="--",
          a6="type your commands and make your way to HC",
        a7="It’s stuck! You can’t pull it off! You try but it’s no use. Streams of data fly past your eyes in the viewport of the VR headset. You start to feel weird. I mean, WAY more weird than you usually do…",
        ];
      }

      // STAGE 18 - - - - - - - -

    if (sc==18){
      cb();
      if (to1==0) {
        var tohs = document.createElement("audio");
        tohs.src = "sound/takeoffheadset.mp3";
        tohs.play();
        to1=1;
      }
      ia=[
          c0="--"
        ];
      oa=[
          a0="--"
        ];
      $("#END").on('dblclick touchend', function(){
        game_over();
      })
      $("#CNTRL").on('dblclick touchend', function(){
        folders();
      })
    }

    // END STAGE - - - - -  - - - - - 

    if (sc==20){cb();
      ia=[
          c0="--",
          c1="--",
          c2="--",
          c3="--",
          c4="--",
          c5="--",
          c6="help",
        c7="leave warehouse",
        ];
      oa=[
          a0="--",
          a1="--",
          a2="--",
          a3="--",
          a4="--",
          a5="--",
          a6="",
        a7="You step outside into the morning light. This was a very strange experience. Has High Contrast truly uploaded his mind to the internet?! As you ponder this, your phone dings - it’s a text message from an unknown number…",
        ];
        var end=1;
        setTimeout(function(){
          if (end==1) {
            $("#cv").html("THE END");at(".t",tss);
            $(document).find('*').off('keyup keydown keypressed');
          }
          end=0;
        },4000);
      }
    }
  })