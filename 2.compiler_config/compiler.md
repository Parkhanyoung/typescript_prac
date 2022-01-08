## tsc --init
타입스크립트 프로젝트임을 선언하는 명령어이다. 이 명령어를 치면 해당 경로에 tsconfig.json이 생긴다.

## tsc
타입스크립트 컴파일러를 작동시키는 명령어이다. 특정 파일을 명시함으로써 해당 파일만 컴파일하도록 할 수도 있다. 

## tsc --watch(-w)
변경 사항이 생길 때마다 다시 컴파일 명령어를 입력하는 일은 매우 번거롭다. 타입스크립트가 변경사항을 추적하고 변경 사항이 생길 때마다 자동 컴파일하여 변경 사항을 반영하도록 하는 옵션이 --watch, 혹은 -w이다.

## tsconfig.json
프로젝트를 진행하면서 파일 하나하나를 컴파일할 수는 없는 노릇이다. 프로젝트 내의 모든 ts 파일을 한 번에 컴파일할 필요가 있다. 다행히 타입스크립트는 그러한 기능을 제공한다. tsconfig.json은 프로젝트 내의 파일들을 컴파일할 때의 설정 사항을 세팅할 수 있는 파일이다. tsconfig는 프로젝트의 루트에 위치해야 하며, tsconfig가 존재하는 경로와 그 하위 경로는 tsconfig의 통제를 받게 된다. 또한 tsconfig.json은 해당 프로젝트가 타입스크립트 프로젝트임을 알려주는 지표이기도 하다. 
         
## tsconfig 속성
**compilerOptions:** 어떻게 컴파일할지 설정하는 속성.          
**compilerOptions의 하위 속성**           
 * target: 어느 버전의 js로 컴파일할지, 타겟이 되는 js를 설정하는 속성. [ex. es6, es5 ...]
 * module: 다수의 파일을 연결하는 방법, 즉 모듈화 방식을 설정하는 속성. [commonjs, ES2015]
 * lib: 기본적으로 포함시킬 라이브러리를 설정하는 속성. dom API, console.log와 같은 api를 활용할 수 있는 것도, 기본값으로 포함되어 있는 라이브러리 덕분이다. target을 es6로 했을 때 기본값은, '["dom", "es6", "dom.iterable", "scripthost"]'이다.
 * allowJs: true로 설정 시, ts, tsx가 아닌 js, jsx 파일이 import되는 것을 허용한다. js 프로젝트를 점진적으로 ts로 바꾸어 나갈 때 주로 사용하는 속성이다.
 * checkJs: true로 설정 시, js 파일에서도 오류 보고를 한다. allowJs와 함께 작동한다.
 * sourceMap: true로 설정 시, 개발자 도구가 컴파일되기 이전의 ts파일을 js 파일에 매핑하는 js.map 파일을 생성한다. 이로 인해 개발자 도구 sources 탭에서 타입스크립트 파일도 확인할 수 있게 되며, 이는 디버깅에 큰 도움이 될 수 있다.
 * rootDir: 컴파일할 ts 파일들이 위치한 디렉토리의 경로를 설정한다. include에 포함된 대상은 모두 rootDir 경로 내에 위치해야 한다.
 * outDir: ts 파일들이 js로 컴파일된 후 저장될 디렉토리의 경로를 설정한다. rootDir 내에 하위 디렉토리가 있다면, 디렉토리까지 복제한다.
 * removeComments: true로 설정 시, 컴파일 과정에서 주석이 모두 사라진다.
 * noEmit: true로 설정하면 ts파일들의 컴파일 에러 여부만 확인하고, js 파일을 따로 생성하지는 않는다. react-scripts를 이용하여 아웃풋을 만들 경우 true로 설정한다.
 * downlevelIteration: for loop가 포함된 코드를 컴파일하는 과정에서 컴파일이 제대로 되지 않는 경우가 있는데, 그때 true로 설정하면 정확한 컴파일이 가능해진다.
 * noEmitOnError: true로 설정 시, 컴파일 과정에서 오류가 검출된 파일을 output으로 내보내지 않는다.
 * strict: strict type check와 관련된 항목이 모두 true가 된다. 세부 항목을 명시함으로써 override 할 수 있다.       
 * noUnusedLocals: true로 설정 시, 사용되지 않은 변수가 있으면 컴파일 에러를 발생시킨다.       
 * noUnusedParameters: true로 설정 시, 사용되지 않은 매개변수가 있으면 컴파일 에러를 발생시킨다.        
 * noImplicitReturns: true로 설정 시, 조건문을 통해 특정 조건 하에서만 return하는 것이 불가능하다. 리턴을 한 번 했으면 모든 조건에서 return을 명시해야 한다. return문을 한 번도 쓰지 않는 것은 가능하다.        

**include:** 컴파일 대상이 되는 파일 및 디렉토리를 설정하는 속성. 형태는 컴파일에 포함할 파일 혹은 경로들을 원소로 하는 배열(exclude 내의 항목들은 제외된다)이다.       
**files:** 컴파일 대상이 되는 파일을 설정하는 속성. 형태는 컴파일에 포함할 개별 파일을 원소로 하는 배열이다.       
*include와 files가 모두 포함되어 있지 않다면, exclude에 명시한 파일들을 제외한 모든 ts 파일을 컴파일한다.       
*include와 files가 모두 포함되어 있다면, 두 속성에 포함된 파일의 합집합을 컴파일한다.       
**exclude:** 컴파일 대상에서 제외할 파일 및 디렉토리를 설정하는 속성. 형태는 컴파일에서 제외시킬 파일들을 원소로 하는 배열이다.          
  
