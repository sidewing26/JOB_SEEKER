// 검색 버튼 클릭 시
document.getElementById('search-btn').addEventListener('click', function() {
    const selectedLocations = Array.from(document.querySelectorAll('input[name="location"]:checked')).map(checkbox => checkbox.value);
    const selectedDisabilities = Array.from(document.querySelectorAll('input[name="disability"]:checked')).map(checkbox => checkbox.value);

    // 여기에 검색 기능 추가 (예: 서버에 선택된 옵션들을 전달하여 검색 결과를 받아오는 등)
    // 받아온 결과를 아래 ul 요소에 추가
    const jobListUl = document.getElementById('job-list');
    jobListUl.innerHTML = ''; // 검색 결과 초기화

    // 예시로 검색 결과를 동적으로 추가하는 코드
    const mockJobResults = [
        '서울에서 시각 장애인을 위한 코딩 교육 프로그램 운영',
        '경기도 장애인을 위한 재활 보조 서비스 제공',
        '인천에서 청각 장애인을 위한 일자리 찾기 프로그램 진행'
    ];

    mockJobResults.forEach(job => {
        const li = document.createElement('li');
        li.textContent = job;
        jobListUl.appendChild(li);
    });
});

function goBack() {
    window.history.back();
}