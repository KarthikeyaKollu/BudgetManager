export async function createUser(userData) {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error('Failed to create user');
    
    const data = await response.json();
    console.log('User created:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getUsers() {
  try {
    const response = await fetch('http://localhost:3000/users');

    if (!response.ok) throw new Error('Failed to fetch users');
    
    const data = await response.json();
    console.log('Users:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function updateUser(userId, updatedData) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error('Failed to update user');
    
    const data = await response.json();
    console.log('User updated:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function deleteUser(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete user');

    console.log(`User with ID ${userId} deleted`);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getUserById(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`);

    if (!response.ok) throw new Error('Failed to fetch user');

    const data = await response.json();
    console.log('User data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}