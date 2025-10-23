let users=[
{ name: 'John Doe', image: 'https://plus.unsplash.com/premium_photo-1760440761490-00ea779527a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600', bio: 'Web Developer passionate about creating beautiful and functional web experiences.' },
{ name: 'Emma Watson', image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'UI/UX Designer who loves minimalist and user-friendly designs.' },
{ name: 'Michael Smith', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Frontend Engineer with a love for clean code and performance optimization.' },
{ name: 'Sophia Johnson', image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Graphic Designer turning imagination into visuals with creative precision.' },
{ name: 'David Lee', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Backend Developer who builds robust and scalable systems.' },
{ name: 'Olivia Brown', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Digital Marketer focused on social media strategy and analytics.' },
{ name: 'Liam Wilson', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Full Stack Developer experienced in modern JavaScript frameworks.' },
{ name: 'Ava Davis', image: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Content Writer passionate about storytelling and branding.' },
{ name: 'Noah Miller', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', bio: 'Data Analyst who turns raw data into meaningful insights.' },
{ name: 'Johny Martinez', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600', bio: 'Product Manager who ensures projects deliver value efficiently.' }
];


let conatainer = document.querySelector(".container")

console.log("hello");

function showallcard(arr){
    arr.forEach(function(user){
        const userCard = document.createElement("div");
    userCard.className = "user-card";

    // Create image element
    const userImg = document.createElement("img");
    userImg.src = user.image;
    userImg.alt = "User Image";

    // Create name element
    const userName = document.createElement("h2");
    userName.textContent = user.name;

    // Create bio element
    const userBio = document.createElement("p");
    userBio.textContent = user.bio;

    // Append all elements into the user card
    userCard.appendChild(userImg);
    userCard.appendChild(userName);
    userCard.appendChild(userBio);

    // Finally, add the card to the container
    conatainer.appendChild(userCard);
    })
}

showallcard(users)

let inp = document.querySelector(".inp");
inp.addEventListener("input",function(dets){
        conatainer.innerHTML="";

    let newarr=users.filter((user)=>{
        return user.name.startsWith(inp.value)
    })
    showallcard(newarr)
})
