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
  // 일 단위로 변환
  const diffDays = diffHours / 24;

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
  // 24시간 이하일 때
  else if (diffHours < 24) {
    const hours = Math.floor(diffHours);
    return `${hours}시간 전`;
  }
  // 그 외, 24시간 이상일 때 (일 단위로 표시)
  else if (diffDays < 7) {
    const days = Math.floor(diffDays);
    return `${days}일 전`;
  }
  // 일주일 이상일 때 (주 단위로 표시)
  else {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}주 전`;
  }
}