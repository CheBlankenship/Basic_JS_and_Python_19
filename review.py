 # A => 4
 # E => 3
 # G => 6
 # I => 1
 # O => 0
 # S => 5
 # T => 7

# function henkan(str) {
#   var result = [];
#   var spt = str.split("");
#   console.log(spt);
#
#   for(var i=0; i<str.length; i++) {
#     // var loop = spt[i];
#     if(spt[i] === "A") {
#       result.push("4");
#     }
#     else if(spt[i] === "E") {
#       result.push("3");
#     }
#     else if(spt[i] === "G") {
#       result.push("6");
#     }
#     else if(spt[i] === "I") {
#       result.push("1");
#     }
#     else if(spt[i] === "S") {
#       result.push("5");
#     }
#
#     else if(spt[i] === "T") {
#       result.push("7");
#     }
#     else{
#       result.push(" ");
#
#     }
#   }
#   var join = result.join("");
#   return join;
# }
# console.log(henkan("ABGDIE"));



 # A => 4
 # E => 3
 # G => 6
 # I => 1
 # O => 0
 # S => 5
 # T => 7


string = 'AOOsTRGHg'

def henkan(nest_str):
    result = ""
    lower_str = nest_str.lower()
    for i in lower_str:
        if i == 'a':
            result += str('4')
        elif i == 'e':
            result += str('3')
        elif i == 'g':
            result += str('6')
        elif i == 'i':
            result += str('1')
        elif i == 'o':
            result += str('0')
        elif i == 's':
            result += str('5')
        elif i == 't':
            result += str('7')
        else:
            result += str(' ')

    print result
henkan(string)
