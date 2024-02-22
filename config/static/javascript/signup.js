function toggleDisabilitySection(value) {
    const section = document.getElementById('disability-section');
    if (value === 'job-seeker') {
        section.style.display = '';
    } else {
        section.style.display = 'none';
    }
}

function goBack() {
    window.history.back();
}