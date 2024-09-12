export const generateUniqueId = () => `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const timeDifference = (pastTimeStr: string): string => {
  // 문자열을 Date 객체로 변환
  const pastTime = new Date(pastTimeStr);
  const currentTime = new Date();
  
  // 시간 차이 계산 (밀리초 단위)
  const timeDiff = currentTime.getTime() - pastTime.getTime();
  const diffSeconds = timeDiff / 1000;
  
  // 분 단위로 변환
  const diffMinutes = diffSeconds / 60;
  // 시간 단위로 변환
  const diffHours = diffSeconds / 3600;

  // 30분 이하일 때
  if (diffMinutes < 10) {
    return '방금 전';
  }
  // 1시간 이하일 때
  else if (diffMinutes < 60) {
    return `${Math.floor(diffMinutes)}분 전`;
  }
  // 2시간 이하일 때
  else if (diffHours < 2) {
    return '한 시간 전';
  }
  // 그 외 경우
  else {
    const hours = Math.floor(diffHours);
    return `${hours}시간 전`;
  }
}