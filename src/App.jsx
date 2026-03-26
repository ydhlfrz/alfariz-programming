import { Container, Navbar, Nav, Button, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaWhatsapp, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

// Import Assets
import logoAlfariz from './assets/logo1.png';
import logoAlfariz2 from './assets/logo2.png';
import thmbproject1 from './assets/earsip.jpg';
import thmbproject2 from './assets/simaset.png';

function App() {
  const waNumber = "6285900214686";
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Alfariz%20Programming,%20saya%20tertarik%20dengan%20layanan%20Anda.`;

  // Data Portfolio
  const projects = [
    {
      title: 'E-Arsip Digital',
      description: 'Sistem pengarsipan dokumen berbasis cloud untuk efisiensi administrasi perkantoran.',
      image: thmbproject1,
      link: 'https://bmdarsip.unaux.com/' // Ganti dengan link project atau detail
    },
    {
      title: 'Asset Management Klinik',
      description: 'Aplikasi manajemen alat kesehatan dan inventaris ruangan untuk operasional klinik.',
      image: thmbproject2,
      link: 'https://sim-aset.unaux.com/sims-klinik/public/' // Ganti dengan link project atau detail
    },
    {
      title: 'Sistem Absensi Online',
      description: 'Platform absensi karyawan real-time dengan fitur laporan otomatis dan GPS.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=500&auto=format&fit=crop', // Contoh jika gambar ke-3 belum ada
      link: '#'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. NAVBAR */}
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold text-primary">
            <img src={logoAlfariz} alt="Logo" height="60" className="me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto fw-medium">
              <Nav.Link href="#home" className="px-3">Home</Nav.Link>
              <Nav.Link href="#about" className="px-3">Tentang</Nav.Link>
              <Nav.Link href="#services" className="px-3">Layanan</Nav.Link>
              <Nav.Link href="#portfolio" className="px-3">Portfolio</Nav.Link>
              <Nav.Link href="#faq" className="px-3">FAQ</Nav.Link>
              <Button href={waLink} target="_blank" variant="primary" className="ms-lg-3 rounded-pill px-4 shadow-sm">
                Hubungi Kami
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. HERO SECTION */}
      <header id="home" className="py-5 mt-4">
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={6}>
              <h6 className="text-primary fw-bold text-uppercase mb-3">PT. Alfariz Teknologi Nusantara</h6>
              <h1 className="display-4 fw-bold mb-4">Transformasi Ide menjadi Realitas Digital</h1>
              <p className="lead text-muted mb-5">Solusi pengembangan aplikasi kelas dunia untuk mengakselerasi bisnis Anda di era digital.</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button href="#services" variant="primary" size="lg" className="px-5 shadow">Layanan Kami</Button>
                <Button href={waLink} target="_blank" variant="outline-primary" size="lg" className="px-5">Konsultasi Gratis</Button>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block text-center">
               <div className="p-5 bg-light rounded-5 border shadow-sm">
                  <img src={logoAlfariz2} alt="Logo" height="250" className="me-2" />
                  <p className="text-muted small">Quality Code • Modern Design • Fast Support</p>
               </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* 3. ABOUT US */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <h2 className="fw-bold mb-4">Tentang Kami</h2>
              <p className="text-muted">Alfariz Programming adalah divisi dari PT. Alfariz Teknologi Nusantara yang berfokus pada pengembangan perangkat lunak berkualitas tinggi. Kami membantu transformasi digital, UMKM, korporasi besar hingga instansi pemerintahan.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FaCheckCircle className="text-success me-2"/> Tim Developer Berpengalaman</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2"/> Teknologi Terbaru (React, Node.js, Laravel)</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2"/> Support & Maintenance Berkelanjutan</li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="bg-primary text-white p-5 rounded-4 shadow">
                 <h4 className="fw-bold mb-3">Visi Kami</h4>
                 <p className="mb-0 fst-italic">"Menjadi mitra teknologi terpercaya yang memberikan solusi digital inovatif dan solutif di seluruh Indonesia."</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-5">Layanan Unggulan</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow py-4">
                <Card.Body>
                  <FaLaptopCode size={50} className="text-primary mb-3" />
                  <Card.Title className="fw-bold">Web Development</Card.Title>
                  <Card.Text className="text-muted small">Website responsif, Company Profile, dan Sistem Informasi Kompleks.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow py-4">
                <Card.Body>
                  <FaMobileAlt size={50} className="text-primary mb-3" />
                  <Card.Title className="fw-bold">Mobile App</Card.Title>
                  <Card.Text className="text-muted small">Aplikasi Android & iOS yang elegan menggunakan teknologi Flutter atau React Native.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow py-4">
                <Card.Body>
                  <FaDesktop size={50} className="text-primary mb-3" />
                  <Card.Title className="fw-bold">Desktop App</Card.Title>
                  <Card.Text className="text-muted small">Aplikasi manajemen kantor atau kasir yang berjalan offline di Windows/macOS.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. PORTFOLIO */}
      <section id="portfolio" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Proyek Terbaru</h2>
            <p className="text-muted">Hasil karya nyata dari tim Alfariz Programming</p>
          </div>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden portfolio-card shadow-hover">
                  <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover transition-transform"
                      style={{ transition: 'transform 0.4s ease' }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <h5 className="fw-bold">{project.title}</h5>
                    <Card.Text className="text-muted small mb-4" style={{ minHeight: '45px' }}>
                      {project.description}
                    </Card.Text>
                    <div className="d-grid">
                      <Button href={project.link} variant="outline-primary" className="rounded-pill fw-medium">
                        Lihat Detail Proyek
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style>
          {`
            .portfolio-card:hover img {
              transform: scale(1.1);
            }
            .object-fit-cover {
              object-fit: cover;
            }
            .shadow-hover {
              transition: all 0.3s ease;
            }
            .shadow-hover:hover {
              transform: translateY(-10px);
              box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
            }
          `}
        </style>
      </section>

      {/* 6. TESTIMONIALS (WHATSAPP STYLE) */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold text-center mb-5">Apa Kata Klien?</h2>
          <Row className="g-4 justify-content-center">
            {[
              {
                sender: "Dr. Hendra - Klinik Lion",
                text: "Mas, saya sudah coba aplikasinya, sistem Asset Managementnya oke banget. Manajemen aset klinik jadi jauh lebih rapi sekarang. Thanks ya pengerjaannya cepet!",
                time: "10:24"
              },
              {
                sender: "Ibu Siti - Instansi Swasta",
                text: "Pagi mas, aplikasi E-Arsip sudah kami coba testing ke semua divisi. User-friendly sekali, staf di sini langsung paham cara pakainya tanpa training lama. Mantap!",
                time: "09:15"
              },
              {
                sender: "Bpk. Rian - UMKM Startup",
                text: "Gak nyesel pilih Mas Alfariz buat bangun MVP web kami. Komunikatif banget selama proses development. Next project kita garap bareng lagi ya!",
                time: "14:40"
              }
            ].map((chat, index) => (
              <Col lg={8} key={index} className="mb-3">
                <div className="d-flex flex-column align-items-start">
                  {/* Nama Pengirim di luar bubble */}
                  <span className="small text-muted mb-1 ms-3 fw-bold">{chat.sender}</span>
                  
                  {/* Bubble Chat */}
                  <div 
                    className="position-relative p-3 shadow-sm" 
                    style={{ 
                      backgroundColor: '#dcf8c6', 
                      borderRadius: '0 15px 15px 15px',
                      maxWidth: '90%',
                      border: '1px solid #c1e6b1'
                    }}
                  >
                    {/* Ekor Bubble (Segitiga kecil) */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-10px',
                      width: 0,
                      height: 0,
                      borderTop: '0px solid transparent',
                      borderBottom: '15px solid transparent',
                      borderRight: '15px solid #dcf8c6'
                    }}></div>

                    <p className="mb-1 text-dark" style={{ fontSize: '0.95rem' }}>{chat.text}</p>
                    
                    <div className="text-end">
                      <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                        {chat.time} <span className="text-info">✓✓</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">Sering Ditanyakan (FAQ)</h2>
          <Accordion className="mx-auto shadow-sm border-0" style={{ maxWidth: '850px' }}>
            <Accordion.Item eventKey="0" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Berapa lama pengerjaan aplikasi?</Accordion.Header>
              <Accordion.Body>
                Estimasi pengerjaan bergantung pada kompleksitas fitur. Untuk Web Company Profile, biasanya memakan waktu 7-14 hari kerja. Untuk sistem informasi yang kompleks atau aplikasi mobile, bisa memakan waktu 1-2 bulan.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Apakah ada biaya maintenance?</Accordion.Header>
              <Accordion.Body>
                Kami memberikan gratis maintenance selama 1 bulan pertama setelah serah terima proyek untuk memastikan semua berjalan lancar tanpa bug. Setelah itu, tersedia paket maintenance opsional untuk update berkala.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Teknologi apa yang digunakan oleh Alfariz Programming?</Accordion.Header>
              <Accordion.Body>
                Kami menggunakan teknologi modern yang scalable seperti React, Node.js, Laravel, dan PHP. Untuk aplikasi mobile, kami menggunakan framework Flutter atau React Native agar performa aplikasi tetap optimal di Android maupun iOS.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Apakah klien akan mendapatkan source code?</Accordion.Header>
              <Accordion.Body>
                Ya, tentu saja. Setelah pelunasan, seluruh Source Code akan diberikan sepenuhnya kepada klien. Kami percaya transparansi dan kepuasan klien adalah prioritas utama.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Dapatkah saya berkonsultasi secara gratis?</Accordion.Header>
              <Accordion.Body>
                Sangat bisa! Anda dapat berkonsultasi mengenai ide atau kebutuhan sistem Anda melalui WhatsApp kami. Kami akan memberikan saran teknologi dan estimasi biaya terbaik tanpa dipungut biaya sepeser pun.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="border-0 mb-2 shadow-sm">
              <Accordion.Header>Bagaimana proses pembayarannya?</Accordion.Header>
              <Accordion.Body>
                Biasanya kami menerapkan sistem termin: Down Payment (DP) di awal untuk memulai pengerjaan, dan pelunasan dilakukan setelah aplikasi selesai di-testing dan siap untuk dideploy (Live).
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* 8. CONTACT US */}
      <section className="py-5 border-top">
        <Container>
          <h2 className="fw-bold text-center mb-5">Hubungi Kami</h2>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <p className="mb-4 text-muted">Siap untuk mendigitalisasi bisnis Anda? Klik tombol di bawah untuk terhubung langsung ke tim Alfariz Programming.</p>
              <Button href={waLink} target="_blank" variant="success" size="lg" className="px-5 py-3 rounded-pill shadow-lg border-0">
                <FaWhatsapp className="me-2 mb-1" size={24} /> Chat Via WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-5 mt-5">
        <Container>
          <Row className="mb-4 text-center text-md-start">
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">PT. Alfariz Teknologi Nusantara</h5>
              <p className="small text-white">Partner terpercaya untuk transformasi digital bisnis Anda. Kami membangun software dengan hati dan logika.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <h5 className="fw-bold mb-3">Alfariz Programming</h5>
              <p className="small text-white">Email: alfarizteknologinusantara@gmail.com<br/>WhatsApp: +62 859 0021 4686</p>
            </Col>
          </Row>
          <hr className="bg-secondary" />
          <div className="text-center pt-3">
            <p className="mb-0 small text-white">© 2026 PT. Alfariz Teknologi Nusantara. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;