  public String reverseString(String s) {
        // take a string
        // convert it to char array 
        // take two pointers 
        // one at the start and other at the end.. 
        char[] charArray = s.toCharArray();
        char temp;
        for(int i=0;i<(charArray.length/2);i++){
              temp = charArray[charArray.length-i-1];
              charArray[charArray.length-i-1] = charArray[i];
              charArray[i] = temp;
        }
        return String.valueOf(charArray);
    }
