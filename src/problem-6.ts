// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(originalProfile: Profile, updateProfile: Partial<Profile>): Profile {
    return { ...originalProfile, ...updateProfile };
}

const originalProfile: Profile = {
    name: "Alice",
    age: 26,
    email: "alice@example.com",
};

const updatedProfile = updateProfile(originalProfile, {
    name: "Alice Johnson",
    age: 31,
    email: "alice.johnson@example.com",
});

// console.log(updatedProfile); // { name: 'Alice Johnson', age: 31, email: 'alice@example.com' }