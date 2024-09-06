// 그냥 리액트쿼리 연습용 파일
import { useQuery } from "@tanstack/react-query";

// const getUserData = <T>(userId: string): Promise<T> => {
//   return fetch(`/api/user/${userId}`).then((response) => response.json() as Promise<T>);
// }

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

const UserProfile = ({ userId }) => {
  const { data, isError, error, isLoading } = useQuery(['user', userId], () => fetchUserData(userId));
    
  if (isLoading) {
    return <div>Loading...</div>;
  }
    
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {data.name}</p>
      <p>Emal: {data.email}</p>
    </div>
  )
}