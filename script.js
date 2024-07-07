document.addEventListener('DOMContentLoaded', function() {
document.getElementById('id-form').addEventListener('submit', function(event) {
    event.preventDefault();

let U_name = document.getElementById("user-name").value;
let dob = document.getElementById("dob").value;
let gender = document.getElementById("gen").value;
let f_name = document.getElementById("fa-name").value;
let village = document.getElementById("vill").value;
let district = document.getElementById("dis").value;
let state = document.getElementById("state").value;
let pin = document.getElementById("pin").value;
let phone = document.getElementById("phone").value;

let u_name = document.getElementById("u-name");
let u_dob = document.getElementById("u-dob");
let u_gender = document.getElementById("u-gender");
let u_father = document.getElementById("u-father");
let u_phone = document.getElementById("u-phone");
let u_address = document.getElementById("u-adrs");

    u_name.innerText = U_name;
    u_dob.innerText = dob;
    u_gender.innerText = gender;
    u_father.innerText = f_name;
    u_phone.innerText = phone;
    u_address.innerText = `${village}, ${district}, ${state}, ${pin}, INDIA`;

    const imageInput = document.getElementById('picture');
            if (imageInput.files && imageInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('u-pic').src = e.target.result;
                };
                reader.readAsDataURL(imageInput.files[0]);
            }
        });

        document.getElementById('download-pdf-btn').addEventListener('click', function() {
            html2canvas(document.getElementById('card-main-container')).then(canvas => {
                const imgData = canvas.toDataURL('image/jpeg');
                
                // Convert to PDF
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'jpeg', 10, 10);
                pdf.save('ID Card.pdf');
            });
        });

        document.getElementById('download-img-btn').addEventListener('click', function() {
            html2canvas(document.getElementById('card-main-container')).then(canvas => {
                const imgData = canvas.toDataURL('image/jpeg');
                
                // Create a link element
                const link = document.createElement('a');
                link.href = imgData;
                link.download = 'ID Card.jpeg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });


    });