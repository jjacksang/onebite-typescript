## 자바스크립트의 클래스 소개

** 자바스크립트 파일을 적용시키는 방법 **

-   tsconfig.json에 들어가서 compilerOptions안에 "allowJs" : true로 설정해준다.

</br>
</br>
</br>
</br>

** 알아두면 좋은 점 **

-   자바스크립트에서 class문법의 경우 파스칼 표기법을 사용 ex) class Student {}
-   class에서 생성자에서 중복되는 값이 있다면 super()에 인자값을 넣어주어 코드량을 줄일 수 있음

-   타입스크립트에서 암시적으로 any타입으로 추론이 가능하게 하는 방법
    -- compilerOptions에 "noImplicitAny" : false로 설정해주면 암시적으로 any추론 가능
