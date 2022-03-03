let osArray = [];

function androidOSHandler(event) {
  event.preventDefault();
  document.getElementById("myOS").innerHTML = "Android";
  osArray.push("Android");
  console.log(osArray)
} 

function appleOSHandler(event) {
  event.preventDefault();
  document.getElementById("myOS").innerHTML = "Apple";
  osArray.push("Apple");
  console.log(osArray)
} 


async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  let OS_type = osArray.values();
  console.log(OS_type);

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url,
      OS_type
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
