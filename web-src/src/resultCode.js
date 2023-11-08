const errorCode = {
    timeOut: 500, // 타임아웃
    timeOut2: 500, // 타임아웃
    abnormalApproach: "9995", // 비정상접근
    emptyToken: "2000", // 토큰이 없음
    tokenExpired: "2001", // 토큰 만료
    tokenTamperWith: "2002", // 비정상 토큰
    invalidToken: "2003", // 비정상 토큰
};

const successCode = {
    success: "0000", // 성공
    noData: "9997", // 데이터 없음
};

export { errorCode, successCode };
