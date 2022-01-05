* union: 두 가지 이상의 타입을 한 번에 표현하는 타입이다. '|' 기호로 여러 타입을 나열한다. 유니언 타입은 if문 등을 통한 런타임 타입 체크와 함께 쓰이는 경우가 많다. 왜냐하면 타입스크립트 컴파일러가 유니언 타입의 세부 내용을 모르고 오류를 발생시키는 경우가 많기 때문이다.
* literal: typescript에는 string, number, boolean이라는 세 가지 리터럴 타입이 있다. 이를 이용하여 특정한 값만을 허용할 수 있다. 또한 union과 함께 쓰여 몇 가지 선택지로 제한할 수도 있다.
* alias(별칭): type 키워드를 이용하여 사용자 정의 타입을 만들 수 있다. 한 유형의 타입이 반복적으로 사용될 경우 코드량을 줄이고 가독성을 올리기 위한 목적으로 사용될 수 있다. 또한 타입을 별도의 하나의 파일에 모아서 관리할 수 있게 되는 것도 큰 장점이다. union 타입도 사용 가능하다.