export default {
  name: "App",
  computed: {},

  data() {
    return {
      hover: false,
      images: {
        cats: {
          img: {
            before: "https://placekitten.com/300",
            after:
              "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
          },
        },
        dogs: {
          img: {
            before: "https://place-puppy.com/300x300",
            after:
              "https://images.unsplash.com/photo-1605785721885-c8ab2ad9d3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
        },

        fruit: {
          img: {
            before:
              "https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
            after:
              "https://images.unsplash.com/photo-1623428207962-48bcb364d5dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",
          },
        },

        baby: {
          img: {
            before:
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
            after:
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          },
        },
      },
    };
  },
  methods: {
    addNew() {
      let topic = prompt("What is the topic of your photos (one word): ");
      let before = prompt("Please enter the full URL to your before image: ");
      let after = prompt("please enter the full URL to your after image: ");
      let newObj = {
        img: {
          before: before,
          after: after,
        },
      };
      this.images[topic] = newObj;
      console.log(this.images);
    },
  },

  template: `<div class="container">
  <nav class="navbar">
      <ul>
        <li class="nav-right"><a href="../index.html">About Me</a></li>
        <li class="nav-right"><a href="../portfolio.html">Portfolio</a></li>
        <li class="nav-right"><a href="../skills.html">Skills</a></li>
        <li class="nav-right"><a href="../cats.html">My Cats</a></li>
        <li class="nav-right"><a href="index.html">Vue Application</a></li>
      </ul>
    </nav>
      <h1 class="text-center">Before and After Pics</h1>
    <div class="flex-container">
      <button @click="addNew">Add New Image Set</button>
    </div>
    <div class="flex-container"><div class="image-style" v-for="(image, index) in images" :key="index">
      <img
        :src="hover === index ? image.img.after : image.img.before"
        @mouseover="hover = index"
        @mouseleave="hover = false"
      />
    </div></div>
    </div>
    `
};