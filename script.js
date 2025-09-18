/* ==== Global Styles ==== */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: white;
}

/* ==== Container ==== */
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

/* ==== Profile Section ==== */
.profile {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(15px);
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(255, 255, 255, 0.4);
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.verified {
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  padding: 3px;
}

.verified svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.profile-info h1 {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}

.profile-info span {
  font-size: 14px;
  opacity: 0.8;
}

/* ==== Categories ==== */
.categories {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.categories button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

.categories button.active,
.categories button:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* ==== Poster Grid ==== */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}

.card {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.1);
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 12px 25px rgba(0,0,0,0.6);
  border: 1px solid #3b82f6;
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.1);
}

/* ==== Card Info ==== */
.card .info {
  padding: 12px;
  text-align: center;
}

.card .info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.card .info a {
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #93c5fd;
  text-decoration: none;
}