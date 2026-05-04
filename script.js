document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('channel-container');
  if (!container) return;

  function getDirectStreamUrl(url) {
    url = (url || '').trim();
    if (!url) return '';

    try {
      const parsed = new URL(url, window.location.href);
      const fileParam = parsed.searchParams.get('file');
      const urlParam = parsed.searchParams.get('url');

      if (urlParam) return decodeURIComponent(urlParam);
      if (fileParam) return decodeURIComponent(fileParam);
    } catch (e) {}

    return url;
  }

  fetch('playlist.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('playlist.json not found');
      return response.json();
    })
    .then(data => {
      container.innerHTML = '';
      data.forEach(channel => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = channel.image || channel.logo || '';
        img.alt = channel.name || 'APK LIVE TV';

        const a = document.createElement('a');
        a.href = 'javascript:void(0);';
        a.title = channel.name || 'Play';
        a.onclick = function () {
          const directUrl = getDirectStreamUrl(channel.url);
          if (!directUrl) {
            alert('Stream URL missing!');
            return;
          }
          window.frames['player'].location.href = 'channel.html?url=' + encodeURIComponent(directUrl);
        };
        a.appendChild(img);
        li.appendChild(a);
        container.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading playlist:', error);
      container.innerHTML = '<p style="color:red;font-size:12px;padding:10px">Playlist load error! playlist.json check korun.</p>';
    });
});

function disableClick() {
  document.oncontextmenu = function () { return false; };
}
