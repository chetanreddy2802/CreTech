const destinations = [
    {
      name: "Chennai",
      region: "south",
      image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1765681589chennai-1696645169332.jpg",
      places: [
        {
          name: "Marina Beach",
          description: "One of the longest urban beaches in the world, perfect for walks and sunsets.",
          images: [
            "https://t4.ftcdn.net/jpg/04/84/47/27/360_F_484472702_acpl3SZTBwb2Al4ZiW8VusICp7Utl8ed.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sunrise_at_Chennai_Marina_beach.jpg"
          ]
        },
        {
          name: "Kapaleeshwarar Temple",
          description: "A stunning Dravidian-style temple dedicated to Lord Shiva.",
          images: [
            "https://ind-tour.com/wp-content/uploads/2024/04/Kapaleeswarar-Temple-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q8avr73SnFg_nfr6XiV2WE57WFG10dmZO5FlAWmqbplmFpjrOTE7T77n-TAlm9Aao6g&usqp=CAU"
          ]
        },
        {
          name: "Pondicherry",
          description: "A former French colony with beaches, boulevards and cafés.",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cojoxi3V3HS6Wrlaq35YkUxk3sX-79MLfQ&s",
            "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-02T132846.040.jpg"
          ]
        }
      ]
    },
    {
      name: "Bangalore",
      region: "south",
      image: "https://i.ytimg.com/vi/IoElbogbGGc/maxresdefault.jpg",
      places: [
        {
          name: "Lalbagh Botanical Garden",
          description: "Historic botanical garden with a glasshouse and exotic plants.",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKAXOD0tWbMuMcGzFG-CKW_-7ZFvVWr-xdw&s",
            "https://www.explorebees.com/uploads/Lalbagh%20Botanical%20Garden%20(2).jpg"
          ]
        },
        {
          name: "Mysore Palace",
          description: "A grand palace with Indo-Saracenic architecture in nearby Mysore.",
          images: [
            "https://www.wendywutours.co.uk/resource/upload/2255/mysore-palace.jpg.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-YKs9jxE0o1k6YWDByzBn70EbBbp6EcTsGfGQBD0-lmCss6vgzSiqGYbwC14521OpyQ&usqp=CAU"
          ]
        },
        {
          name: "Nandi Hills",
          description: "A picturesque hill station with sunrise views and historical forts.",
          images: [
            "https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382416597262-485602502.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfaHz4K_AI975tLyRnzoe8NbNqOjgLn8BEQ&s"
          ]
        }
      ]
    },
    {
      name: "Hyderabad",
      region: "south",
      image: "https://i.ytimg.com/vi/zBvT299ihHY/maxresdefault.jpg",
      places: [
        {
          name: "Charminar",
          description: "Iconic 16th-century mosque with four grand arches.",
          images: [
            "https://static.toiimg.com/thumb/69144907/GettyImages-518256134.jpg?width=1200&height=900",
            "https://www.shutterstock.com/image-photo/hyderabadindia-december-23-2022-charminar-600nw-2545998573.jpg"
          ]
        },
        {
          name: "Golconda Fort",
          description: "A historic fortress known for its acoustics and grandeur.",
          images: [
            "https://www.savaari.com/blog/wp-content/uploads/2022/10/Golconda_Fort_and_the_Sunset_Hyderabad.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VIPz5syHGMNUpjskehpk76CC98u_KOVNV2Y8Zao86loUnyX0AT1VHSTtJotRoEWxQoo&usqp=CAU"
          ]
        },
        {
          name: "Hitech City",
          description: "Modern IT hub with skyscrapers and upscale developments.",
          images: [
            "https://www.hotelierindia.com/cloud/2024/11/08/0df4eb22625b0dff3be9235756c405c8-1.jpg",
            "https://img.staticmb.com/mbcontent/images/uploads/2025/1/cyber-towers-in-hitec-city.jpg"
          ]
        }
      ]
    },
    {
      name: "Andhra Pradesh",
      region: "south",
      image: "https://hindi.holidayrider.com/wp-content/uploads/2019/11/optimized-ccay.jpg",
      places: [
        {
          name: "Araku Valley",
          description: "Scenic hill station with waterfalls, coffee plantations, and caves.",
          images: [
            "https://static.toiimg.com/photo/msid-97972354,width-96,height-65.cms",
            "https://www.india.com/wp-content/uploads/2024/12/waterfall-2.jpg"
          ]
        },
        {
          name: "Tirupati",
          description: "Pilgrimage city famous for Venkateswara Temple on Tirumala hills.",
          images: [
            "https://vidzone.in/wp-content/uploads/2024/05/Tirumala-Alipiri-Gate.webp",
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Balaji.jpg",
            "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8985/1368985-i-86aac6dfddf1"
          ]
        }
      ]
    },
    {
      name: "Delhi",
      region: "north",
      image: "https://ih1.redbubble.net/image.4383421257.6532/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg",
      places: [
        {
          name: "India Gate",
          description: "War memorial and national landmark in central Delhi.",
          images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg/960px-India_Gate_on_the_evening_of_77th_Independence_day.jpg",
            "https://t3.ftcdn.net/jpg/01/43/04/22/360_F_143042216_yvwbsiCZDAqPX5r5GZnZYM4da30mMclA.jpg"
          ]
        },
        {
          name: "Red Fort",
          description: "Historic Mughal fort made of red sandstone.",
          images: [
            "https://static.toiimg.com/photo/65666850.cms",
            "https://thefederal.com/file/2023/01/iStock-1369987507.jpg"
          ]
        },
        {
          name: "Qutub Minar",
          description: "A UNESCO World Heritage Site and tallest brick minaret.",
          images: [
            "https://imgmediagumlet.lbb.in/media/2023/11/654377517b6db1676cee7a98_1698920273264.jpg",
            "https://www.thedelhitours.com/blog/wp-content/uploads/2024/09/Qutub-Minar-750x564.jpg"
          ]
        }
      ]
    }
  ];
  
  function createCard(destination) {
    return `
      <div class="card" onclick="showDetails('${destination.name}')">
        <img src="${destination.image}" alt="${destination.name}" />
        <div class="card-content">
          <h2>${destination.name}</h2>
        </div>
      </div>
    `;
  }
  
  function renderGallery(destList) {
    document.getElementById("gallery").innerHTML = destList.map(createCard).join("");
  }
  
  function filterDestinations() {
    const filter = document.getElementById("filter").value;
    if (filter === "all") renderGallery(destinations);
    else renderGallery(destinations.filter(dest => dest.region === filter));
  }
  
  function showDetails(destinationName) {
    const destination = destinations.find(dest => dest.name === destinationName);
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
  
    if (!destination) return;
  
    modalContent.innerHTML = `
      <span class="close-btn" onclick="closeModal()">&times;</span>
      <h2>${destination.name}</h2>
      ${destination.places.map(place => `
        <div class="subplace">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <div class="image-row">
            ${place.images.map(img => `<img src="${img}" alt="${place.name} image">`).join("")}
          </div>
        </div>
      `).join("")}
    `;
  
    modal.classList.remove("hidden");
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  
  
  
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  
  window.onload = () => renderGallery(destinations);
  