function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // First figure 
    // Head
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#206676"
    ctx.save();
    ctx.lineWidth = 5;
    ctx.translate(0, 50);
    ctx.fillStyle = "#36BBCE";
    ctx.beginPath();
    ctx.ellipse(50, 100, 40, 35, 0, 0, Math.PI * 2, false);
    ctx.stroke()
    ctx.fill()
    ctx.restore();

    // Hat
    // first ellipse
    ctx.save()
    ctx.strokeStyle = "#000"
    ctx.fillStyle = "#274D7E";
    ctx.beginPath();
    ctx.ellipse(50, 115, 50, 10, 0, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();


    // second ellipse
    ctx.save()
    ctx.fillStyle = "#274D7E";
    ctx.strokeStyle = "#000"
    ctx.beginPath();
    ctx.ellipse(50, 105, 25, 10, Math.PI, 0, Math.PI, true);
    ctx.moveTo(50 + 25, 105);
    ctx.lineTo(50 + 25, 105 - 40);
    ctx.lineTo(50 - 25, 105 - 40);
    ctx.lineTo(50 - 25, 105);
    ctx.stroke();
    ctx.fill();


    // Third ellipse
    ctx.beginPath();
    ctx.ellipse(50, 105 - 40, 25, 10, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore()


    // Eyes

    ctx.save()
    ctx.strokeStyle = "#206676"
    ctx.beginPath();
    ctx.translate(-5, 35);
    ctx.ellipse(50 + 18, 100, 8, 6, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(50 - 18, 100, 8, 6, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();


    // pupils
    ctx.save();
    ctx.fillStyle = "#206676"
    ctx.beginPath();
    ctx.translate(-7, 35);
    ctx.ellipse(50 + 18, 100, 3, 6, 0, Math.PI * 2, false);
    ctx.ellipse(50 - 18, 100, 3, 6, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();


    // mouth
    ctx.save();
    ctx.strokeStyle = "#206676"
    ctx.translate(45, 170);
    ctx.beginPath();
    ctx.ellipse(0, 0, 18, 6, (Math.PI / 180) * 10, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();

    // nose
    ctx.save();
    ctx.strokeStyle = "#206676";
    ctx.translate(-10, 0);
    ctx.beginPath();
    ctx.moveTo(50 * 1.2, 130);
    ctx.lineTo(45, 155);
    ctx.lineTo(50 * 1.2, 155);
    ctx.stroke();
    ctx.restore();

    // Second figure 
    ctx.save();
    ctx.fillStyle = "#36BBCE";
    ctx.translate(300, 150);
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 0, 40, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(90, 0);
    ctx.lineTo(180, -60);
    ctx.lineTo(50, -60);
    ctx.closePath();
    ctx.stroke();
    ctx.translate(90, 0);
    ctx.beginPath();
    ctx.arc(00, 0, 10, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.rotate((Math.PI / 180) * 45);
    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(20, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(-20, 0);
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.translate(390, 150);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-60, -80);
    ctx.lineTo(-40, -80);
    ctx.lineTo(-80, -80);
    ctx.moveTo(110, 0);
    ctx.lineTo(82, -90);
    ctx.lineTo(110, -110);
    ctx.moveTo(82, -90);
    ctx.lineTo(50, -80);
    ctx.stroke();
    ctx.restore();


    // Third figure 
    ctx.strokeStyle = "#000"
    ctx.save();
    ctx.fillStyle = "#B92E3B";
    ctx.translate(800, 150);
    // wall
    ctx.beginPath();
    ctx.rect(0, -50, 140, 100);
    ctx.stroke()
    ctx.fill();
    // roof
    ctx.beginPath();
    ctx.moveTo(0, -50);
    ctx.lineTo(70, -120);
    ctx.lineTo(140, -50);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    // pipe
    ctx.beginPath();
    ctx.save();
    ctx.moveTo(120, -65);
    ctx.lineTo(120, -100);
    ctx.lineTo(110, -100);
    ctx.lineTo(110, -65);
    ctx.stroke();
    ctx.fill()
    ctx.restore()
    ctx.beginPath();
    ctx.ellipse(115, -100, 5, 2, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill()
    ctx.restore();
    // windows
    ctx.save();
    ctx.translate(813, 111);
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {

            ctx.fillRect(i * 23, j * 15, 22, 14);
        }
    }
    ctx.translate(70, 0);
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {

            ctx.fillRect(i * 23, j * 15, 22, 14);
        }
    }
    ctx.translate(0, 50);
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {

            ctx.fillRect(i * 23, j * 15, 22, 14);
        }
    }
    ctx.restore();
    // door
    ctx.save();
    ctx.translate(800, 200);
    ctx.beginPath();
    ctx.moveTo(35, 0);
    ctx.lineTo(35, -38);
    ctx.moveTo(22, 0);
    ctx.lineTo(22, -30);
    ctx.moveTo(48, 0);
    ctx.lineTo(48, -30);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(35, -30, 13, 8, 0, Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(41, -13, 2, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(29, -13, 2, 0, Math.PI * 2, false);
    ctx.stroke();
}