let selectedColor = 'pink';
        
function openModal(fieldName) {
    document.getElementById('modalTitle').textContent = fieldName;
    document.getElementById('interestModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('interestModal').style.display = 'none';
}

function saveInterestInfo() {
    alert('Information saved successfully!');
    closeModal();
}

function showNewCardForm() {
    document.getElementById('newCardForm').style.display = 'block';
}

function hideNewCardForm() {
    document.getElementById('newCardForm').style.display = 'none';
}

function selectColor(color, element) {
    selectedColor = color;
    
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
}

function addNewCard() {
    const fieldName = document.getElementById('newFieldName').value.trim();
    
    if (!fieldName) {
        alert('Please enter a field name');
        return;
    }
    
    const cardsContainer = document.getElementById('cardsContainer');
    const newCard = document.createElement('div');
    newCard.className = `card card-${selectedColor === 'pink' ? 'astrophysics' : 
                        selectedColor === 'green' ? 'neuroscience' : 
                        selectedColor === 'yellow' ? 'journalism' : 'computer-science'}`;
    newCard.onclick = function() { openModal(fieldName); };
    
    const nameDiv = document.createElement('div');
    nameDiv.textContent = fieldName;
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'card-info';
    infoDiv.textContent = 'Click for more';
    
    newCard.appendChild(nameDiv);
    newCard.appendChild(infoDiv);
    cardsContainer.appendChild(newCard);
    
    document.getElementById('newFieldName').value = '';
    hideNewCardForm();
}

window.onclick = function(event) {
    const modal = document.getElementById('interestModal');
    if (event.target == modal) {
        closeModal();
    }
}