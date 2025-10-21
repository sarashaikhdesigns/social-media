// Post creation functionality
document.querySelector(".post-btn").addEventListener("click", () => {
  const textarea = document.querySelector(".post-input")
  const content = textarea.value.trim()

  if (content) {
    createPost(content)
    textarea.value = ""
  }
})

function createPost(content) {
  const feed = document.querySelector(".feed")
  const createPostCard = document.querySelector(".create-post")

  const post = document.createElement("article")
  post.className = "post"
  post.style.animation = "slideIn 0.5s ease-out"

  post.innerHTML = `
        <div class="post-header">
            <img src="/cyber-avatar.png" alt="User" class="post-avatar">
            <div class="post-user-info">
                <h3 class="post-username">Neo_User_2003</h3>
                <span class="post-time">Just now • The Matrix</span>
            </div>
        </div>
        <div class="post-content">
            <p>${content}</p>
        </div>
        <div class="post-actions">
            <button class="action-btn-post like-btn">👍 Like (0)</button>
            <button class="action-btn-post">💬 Comment (0)</button>
            <button class="action-btn-post">🔄 Share</button>
        </div>
    `

  feed.insertBefore(post, createPostCard.nextSibling)

  // Add like functionality to new post
  const likeBtn = post.querySelector(".like-btn")
  let likes = 0
  let liked = false

  likeBtn.addEventListener("click", function () {
    if (!liked) {
      likes++
      liked = true
      this.style.background = "rgba(0, 255, 0, 0.2)"
      this.style.borderColor = "#00ff00"
    } else {
      likes--
      liked = false
      this.style.background = "transparent"
      this.style.borderColor = "#00ff00"
    }
    this.textContent = `👍 Like (${likes})`
  })
}

// Add like functionality to existing posts
document.querySelectorAll(".action-btn-post").forEach((btn) => {
  if (btn.textContent.includes("Like")) {
    let likes = Number.parseInt(btn.textContent.match(/\d+/)[0])
    let liked = false

    btn.addEventListener("click", function () {
      if (!liked) {
        likes++
        liked = true
        this.style.background = "rgba(0, 255, 0, 0.2)"
        this.style.borderColor = "#00ff00"
      } else {
        likes--
        liked = false
        this.style.background = "transparent"
        this.style.borderColor = "#00ff00"
      }
      this.textContent = `👍 Like (${likes})`
    })
  }
})

// Add animation for new posts
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Simulate online status updates
setInterval(() => {
  const onlineStatus = document.querySelector(".online-status")
  onlineStatus.style.color = onlineStatus.style.color === "rgb(0, 255, 0)" ? "#00ff00" : "rgb(0, 255, 0)"
}, 2000)

// Add hover effects to profile avatar
const profileAvatar = document.querySelector(".profile-avatar")
if (profileAvatar) {
  profileAvatar.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(5deg)"
  })

  profileAvatar.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)"
  })
}

// Console easter egg
console.log(
  "%c🌐 WELCOME TO CYBERSPACE 🌐",
  "color: #00ffff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ffff;",
)
console.log("%cYou have entered the Matrix...", "color: #00ff00; font-size: 14px;")
console.log("%cRemember: There is no spoon 🥄", "color: #ff00ff; font-size: 12px;")
