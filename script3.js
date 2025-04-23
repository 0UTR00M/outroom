const sizeDataGuide1 = {
    S: [
      { zone: 'Poitrine', cm: '57.0', pouces: '22.2' },
      { zone: 'Longueur devant', cm: '70.0', pouces: '27.3' },
      { zone: 'Longueur de bras', cm: '22.5', pouces: '8.8' }
    ],
    M: [
      { zone: 'Poitrine', cm: '60.0', pouces: '23.4' },
      { zone: 'Longueur devant', cm: '72.0', pouces: '28.1' },
      { zone: 'Longueur de bras', cm: '23.0', pouces: '9.0' }
    ],
    L: [
      { zone: 'Poitrine', cm: '63.0', pouces: '24.6' },
      { zone: 'Longueur devant', cm: '74.0', pouces: '28.9' },
      { zone: 'Longueur de bras', cm: '23.5', pouces: '9.2' }
    ],
    XL: [
      { zone: 'Poitrine', cm: '66.0', pouces: '25.7' },
      { zone: 'Longueur devant', cm: '76.0', pouces: '29.6' },
      { zone: 'Longueur de bras', cm: '24.0', pouces: '9.4' }
    ]
  };
  
  const sizeDataGuide2 = {
    S: [
      { zone: 'Poitrine', cm: '29.5', pouces: '11.5' },
      { zone: 'Longueur devant', cm: '44.0', pouces: '17.2' }
    ],
    M: [
      { zone: 'Poitrine', cm: '32.5', pouces: '12.7' },
      { zone: 'Longueur devant', cm: '45.0', pouces: '17.6' }
    ],
    L: [
      { zone: 'Poitrine', cm: '35.5', pouces: '13.8' },
      { zone: 'Longueur devant', cm: '46.0', pouces: '17.9' }
    ],
    XL: [
      { zone: 'Poitrine', cm: '39.0', pouces: '15.2' },
      { zone: 'Longueur devant', cm: '47.0', pouces: '18.3' }
    ]
  };
  
  const sizeDataGuide3 = {
    S: [
      { zone: 'Ceinture', cm: '38.0', pouces: '14.8' },
      { zone: 'Hanches', cm: '54.5', pouces: '21.3' },
      { zone: 'Taille devant', cm: '33.9', pouces: '13.2' },
      { zone: 'Longeur dentrejambe', cm: '24.2', pouces: '9.4' },
      { zone: 'Taille derriére', cm: '39.8', pouces: '15.5' }
    ],
    M: [
      { zone: 'Ceinture', cm: '41.0', pouces: '16.0' },
      { zone: 'Hanches', cm: '57.5', pouces: '22.4' },
      { zone: 'Taille devant', cm: '34.5', pouces: '13.5' },
      { zone: 'Longeur dentrejambe', cm: '24.2', pouces: '9.4' },
      { zone: 'Taille derriére', cm: '40.4', pouces: '15.8' }
    ],
    L: [
      { zone: 'Ceinture', cm: '45', pouces: '17.6' },
      { zone: 'Hanches', cm: '61.0', pouces: '23.8' },
      { zone: 'Taille devant', cm: '35.7', pouces: '13.9' },
      { zone: 'Longeur dentrejambe', cm: '24.2', pouces: '9.4' },
      { zone: 'Taille derriére', cm: '41.8', pouces: '16.3' }
    ],
    XL: [
      { zone: 'Ceinture', cm: '49.0', pouces: '19.1' },
      { zone: 'Hanches', cm: '64.5', pouces: '25.2' },
      { zone: 'Taille devant', cm: '36.9', pouces: '14.4' },
      { zone: 'Longeur dentrejambe', cm: '24.2', pouces: '9.4' },
      { zone: 'Taille derriére', cm: '43.2', pouces: '16.8' }
    ]
  };
  
  const sizeDataGuide4 = {
    S: [
      { zone: 'Ceinture', cm: '32.0', pouces: '12.5' },
      { zone: 'Hanches', cm: '51.0', pouces: '19.9' },
      { zone: 'Taille devant', cm: '28.5', pouces: '11.1' },
      { zone: 'Longeur dentrejambe', cm: '81.0', pouces: '31.6' },
      { zone: 'Taille derriére', cm: '34.5', pouces: '13.5' }
    ],
    M: [
      { zone: 'Ceinture', cm: '35.0', pouces: '13.7' },
      { zone: 'Hanches', cm: '54.0', pouces: '21.1' },
      { zone: 'Taille devant', cm: '29.5', pouces: '11.5' },
      { zone: 'Longeur dentrejambe', cm: '82.0', pouces: '32.0' },
      { zone: 'Taille derriére', cm: '35.9', pouces: '14.0' }
    ],
    L: [
      { zone: 'Ceinture', cm: '38.0', pouces: '14.8' },
      { zone: 'Hanches', cm: '57.0', pouces: '22.2' },
      { zone: 'Taille devant', cm: '30.5', pouces: '11.9' },
      { zone: 'Longeur dentrejambe', cm: '83.0', pouces: '32.4' },
      { zone: 'Taille derriére', cm: '37.3', pouces: '14.5' }
    ],
    XL: [
      { zone: 'Ceinture', cm: '41.5', pouces: '16.2' },
      { zone: 'Hanches', cm: '60.5', pouces: '23.6' },
      { zone: 'Taille devant', cm: '31.5', pouces: '12.3' },
      { zone: 'Longeur dentrejambe', cm: '84.0', pouces: '32.8' },
      { zone: 'Taille derriére', cm: '38.9', pouces: '15.2' }
    ]
  };
  
  const sizeDataGuide5 = {
    S: [
      { zone: 'Poitrine', cm: '60.0', pouces: '23.6' },
      { zone: 'Longueur devant', cm: '76.0', pouces: '29.9' },
      { zone: 'Longueur de bras', cm: '24.0', pouces: '9.4' }
    ],
    M: [
      { zone: 'Poitrine', cm: '63.0', pouces: '24.8' },
      { zone: 'Longueur devant', cm: '78.0', pouces: '30.7' },
      { zone: 'Longueur de bras', cm: '24.4', pouces: '9.6' }
    ],
    L: [
      { zone: 'Poitrine', cm: '66.0', pouces: '25.9' },
      { zone: 'Longueur devant', cm: '80.0', pouces: '31.5' },
      { zone: 'Longueur de bras', cm: '24.8', pouces: '9.7' }
    ],
    XL: [
      { zone: 'Poitrine', cm: '69.0', pouces: '27.2' },
      { zone: 'Longueur devant', cm: '82.0', pouces: '32.3' },
      { zone: 'Longueur de bras', cm: '25.2', pouces: '9.9' }
    ]
  };
  
  // Function to update the size table
  function updateSizeData(guideNumber, size) {
    const sizeData = eval(`sizeDataGuide${guideNumber}`); // Get the correct size data based on the guide number
    const tbody = document.getElementById(`size-data-${guideNumber}`);
    const rows = sizeData[size].map(item => `
      <tr><td>${item.zone}</td><td>${item.cm}</td><td>${item.pouces}</td></tr>
    `).join('');
    tbody.innerHTML = rows;
  }
  
  // Add event listeners for each guide
  for (let i = 1; i <= 5; i++) {
    const buttons = document.querySelectorAll(`.guide-${i} button`);
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        updateSizeData(i, button.dataset.size); // Update size data for the specific guide
      });
    });
  
    updateSizeData(i, 'S'); // Default size is 'S'
  }
  