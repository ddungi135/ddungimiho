//http://localhost:5500/contacts

function getPageno(){
    //get방식의 querystring을 읽을수 있는 객체 생성
    const params=new URLSearchParams(location.search);
    const pageno=parseInt(params.get('pageno'));

    //pageno가 없거나 숫자로 바꿀 수 없는 값인 경우
    //parseInt의 결과는 NaN
    //Not a Number
    //NaN을 비교하면 무조건 false (Js에서 NaN은 비교값이 아니다)
    // NaN와 비교할때는 isNan()함수를 사용해야한다
    if(isNaN(pageno))
     return 1;
     else if(pageno<1)
     return 1;
     return pageno;
}
//  기본 매개변수 (default parameter)
async function fetch(pageno=1,pagesize=10){
    const api='http://sample.bmaster.kro.kr/contacts';
    const url=`${api}?pageno=${pageno}&pagesize=${pagesize}`;
    //$.ajax()는 병렬처리 (비동기 처리)되는 코드 -> 언제끝날지모른다
    //비동기코드를 리턴받는 result는 미래에 값이 들어올것이다 란 값을가진다
    //(Promise)
    //
  try {
    return await $.ajax(url);
  }catch(err){
    console.log(err);
    return null;
  }
}

// 사용자는 x다