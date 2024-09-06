// 그냥 리액트쿼리 연습용 파일2

import { useMutation, useQueryClient } from 'react-query';

// 데이터 업데이트 함수
function updateUser(userId, updatedData) {
  return fetch(`/api/user/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
  }).then((response) => response.json());
}

function UserProfileEditor({ userId }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((updateedData) => updateUser(userId, updatedData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['user', userId]);
    },
  });

  const handleSubmit = (updatedData) => {
    mutate(updatedData);
  }

  return (
    <div>
      <h2>Edit User Profile</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  )
}