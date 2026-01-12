const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

// Create a new PDF document
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'letter'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 20;
const contentWidth = pageWidth - (margin * 2);

// Colors
const primaryBlue = [45, 62, 140]; // #2D3E8C
const navyBlue = [26, 37, 102]; // #1A2566
const gray = [107, 114, 128]; // #6B7280
const black = [26, 26, 26]; // #1A1A1A

let yPos = margin;

// Helper function to add text
function addText(text, x, fontSize, color, style = 'normal') {
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  if (style === 'bold') {
    doc.setFont('helvetica', 'bold');
  } else {
    doc.setFont('helvetica', 'normal');
  }
  doc.text(text, x, yPos);
}

// Helper function to add wrapped text
function addWrappedText(text, x, fontSize, color, maxWidth, lineHeight = 7) {
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, yPos);
  return lines.length * lineHeight;
}

// Page 1 - Cover
doc.setFillColor(...primaryBlue);
doc.rect(0, 0, pageWidth, 80, 'F');

doc.setTextColor(255, 255, 255);
doc.setFontSize(28);
doc.setFont('helvetica', 'bold');
doc.text('NCHIA', pageWidth / 2, 35, { align: 'center' });

doc.setFontSize(14);
doc.setFont('helvetica', 'normal');
doc.text('North Carolina Homicide Investigators Association', pageWidth / 2, 45, { align: 'center' });

doc.setFontSize(24);
doc.setFont('helvetica', 'bold');
doc.text('Vendor & Sponsor', pageWidth / 2, 60, { align: 'center' });
doc.text('Prospectus 2025', pageWidth / 2, 70, { align: 'center' });

yPos = 100;

addText('Reach North Carolina\'s Homicide Investigators', margin, 20, primaryBlue, 'bold');
yPos += 15;

const introText = 'NCHIA conferences offer unparalleled access to law enforcement decision-makers from agencies across North Carolina. Our attendees are actively seeking solutions, training resources, and equipment to enhance their investigative capabilities.';
yPos += addWrappedText(introText, margin, 11, gray, contentWidth);
yPos += 15;

// Key Stats
doc.setFillColor(245, 247, 250);
doc.rect(margin, yPos - 5, contentWidth, 35, 'F');

doc.setFontSize(14);
doc.setTextColor(...primaryBlue);
doc.setFont('helvetica', 'bold');
doc.text('200+', margin + 15, yPos + 10, { align: 'center' });
doc.text('500+', margin + 60, yPos + 10, { align: 'center' });
doc.text('2', margin + 105, yPos + 10, { align: 'center' });
doc.text('40+', margin + 150, yPos + 10, { align: 'center' });

doc.setFontSize(9);
doc.setTextColor(...gray);
doc.setFont('helvetica', 'normal');
doc.text('Attendees per', margin + 15, yPos + 18, { align: 'center' });
doc.text('Conference', margin + 15, yPos + 23, { align: 'center' });
doc.text('Members', margin + 60, yPos + 18, { align: 'center' });
doc.text('Statewide', margin + 60, yPos + 23, { align: 'center' });
doc.text('Conferences', margin + 105, yPos + 18, { align: 'center' });
doc.text('Annually', margin + 105, yPos + 23, { align: 'center' });
doc.text('Years', margin + 150, yPos + 18, { align: 'center' });
doc.text('Serving NC', margin + 150, yPos + 23, { align: 'center' });

yPos += 45;

addText('Who Attends?', margin, 16, primaryBlue, 'bold');
yPos += 10;

const attendees = [
  'Homicide detectives and investigators',
  'Crime scene technicians',
  'Forensic specialists',
  'District attorneys and prosecutors',
  'Agency command staff',
  'Medical examiners'
];

attendees.forEach(attendee => {
  doc.setFontSize(10);
  doc.setTextColor(...black);
  doc.text('•  ' + attendee, margin + 5, yPos);
  yPos += 6;
});

yPos += 10;

addText('Conference Schedule', margin, 16, primaryBlue, 'bold');
yPos += 10;

doc.setFontSize(12);
doc.setTextColor(...black);
doc.setFont('helvetica', 'bold');
doc.text('Spring Conference 2025', margin + 5, yPos);
yPos += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(...gray);
doc.text('March 15-17, 2025 • Raleigh Convention Center', margin + 5, yPos);
yPos += 10;

doc.setFontSize(12);
doc.setTextColor(...black);
doc.setFont('helvetica', 'bold');
doc.text('Fall Conference 2025', margin + 5, yPos);
yPos += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(...gray);
doc.text('October 8-10, 2025 • Raleigh Convention Center', margin + 5, yPos);

// Page 2 - Sponsorship Tiers
doc.addPage();
yPos = margin;

addText('Sponsorship Tiers', margin, 20, primaryBlue, 'bold');
yPos += 15;

const tiers = [
  {
    name: 'Platinum Sponsor',
    price: '$5,000',
    benefits: [
      'Premium booth location',
      'Logo on all conference materials',
      'Speaking opportunity (15 min)',
      '4 conference registrations',
      'Recognition at opening ceremony',
      'Full-page program advertisement'
    ]
  },
  {
    name: 'Gold Sponsor',
    price: '$3,000',
    benefits: [
      'Standard booth location',
      'Logo on event signage',
      '2 conference registrations',
      'Half-page program advertisement'
    ]
  },
  {
    name: 'Silver Sponsor',
    price: '$1,500',
    benefits: [
      'Standard booth location',
      'Program listing',
      '1 conference registration'
    ]
  },
  {
    name: 'Bronze Sponsor',
    price: '$750',
    benefits: [
      'Tabletop display',
      'Program listing'
    ]
  }
];

tiers.forEach((tier, index) => {
  // Tier header
  doc.setFillColor(...(index === 0 ? navyBlue : primaryBlue));
  doc.rect(margin, yPos - 3, contentWidth, 10, 'F');

  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(tier.name, margin + 5, yPos + 4);
  doc.text(tier.price, pageWidth - margin - 5, yPos + 4, { align: 'right' });

  yPos += 12;

  tier.benefits.forEach(benefit => {
    doc.setFontSize(9);
    doc.setTextColor(...gray);
    doc.setFont('helvetica', 'normal');
    doc.text('✓  ' + benefit, margin + 8, yPos);
    yPos += 5;
  });

  yPos += 8;
});

yPos += 5;

addText('Standard Booth Benefits', margin, 16, primaryBlue, 'bold');
yPos += 10;

const boothBenefits = [
  '8x10 booth space with table and chairs',
  'Exhibitor badge(s) based on tier',
  'Inclusion in conference program',
  'Access to attendee networking events',
  'Electric and WiFi access',
  'Conference bag insert opportunity'
];

boothBenefits.forEach(benefit => {
  doc.setFontSize(10);
  doc.setTextColor(...black);
  doc.text('•  ' + benefit, margin + 5, yPos);
  yPos += 6;
});

// Page 3 - Contact & Registration
doc.addPage();
yPos = margin;

addText('How to Register', margin, 20, primaryBlue, 'bold');
yPos += 15;

const registerText = 'To secure your booth or sponsorship, please complete our online vendor registration form at:';
yPos += addWrappedText(registerText, margin, 11, gray, contentWidth);
yPos += 8;

doc.setFontSize(12);
doc.setTextColor(...primaryBlue);
doc.setFont('helvetica', 'bold');
doc.text('www.nchia.org/vendors', margin, yPos);
yPos += 15;

addText('Payment Information', margin, 16, primaryBlue, 'bold');
yPos += 10;

doc.setFontSize(10);
doc.setTextColor(...gray);
doc.setFont('helvetica', 'normal');
const paymentText = 'Payment is due within 30 days of registration. We accept checks, credit cards, and purchase orders from government agencies.';
yPos += addWrappedText(paymentText, margin, 10, gray, contentWidth);
yPos += 15;

addText('Contact Information', margin, 16, primaryBlue, 'bold');
yPos += 10;

doc.setFontSize(11);
doc.setTextColor(...black);
doc.setFont('helvetica', 'bold');
doc.text('North Carolina Homicide Investigators Association', margin, yPos);
yPos += 7;

doc.setFont('helvetica', 'normal');
doc.setTextColor(...gray);
doc.setFontSize(10);
doc.text('P.O. Box 12345', margin, yPos);
yPos += 5;
doc.text('Raleigh, NC 27601', margin, yPos);
yPos += 8;
doc.text('Email: info@nchia.org', margin, yPos);
yPos += 5;
doc.text('Phone: (919) 555-1234', margin, yPos);
yPos += 20;

// Footer box
doc.setFillColor(...primaryBlue);
doc.rect(margin, yPos, contentWidth, 40, 'F');

doc.setFontSize(14);
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.text('Reserve Your Booth Today', margin + contentWidth/2, yPos + 15, { align: 'center' });

doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
doc.text('Booth space is limited. Early registration is recommended.', margin + contentWidth/2, yPos + 25, { align: 'center' });
doc.text('Questions? Contact us at info@nchia.org', margin + contentWidth/2, yPos + 32, { align: 'center' });

// Save the PDF
const outputPath = path.join(__dirname, '..', 'public', 'vendor-prospectus.pdf');
const pdfOutput = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));

console.log('Vendor prospectus PDF generated successfully!');
console.log('Output:', outputPath);
