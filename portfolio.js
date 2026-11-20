const modelButtons = document.querySelectorAll('[data-model]');
const models = {
  book: {
    android: 'Jetpack Compose',
    ios: 'SwiftUI',
    shared: 'Domain · Data',
    caption: 'BookSearch는 비즈니스 로직과 데이터 처리를 공유하고 화면은 플랫폼별로 구성합니다.',
  },
  memo: {
    android: 'Android',
    ios: 'iOS',
    shared: 'Compose UI · Data',
    caption: 'KMPMemo는 Compose UI와 SQLDelight를 사용하는 데이터 처리 코드를 Android와 iOS에서 공유합니다.',
  },
};

for (const button of modelButtons) {
  button.addEventListener('click', () => {
    const model = models[button.dataset.model];
    document.querySelector('#android-ui').textContent = model.android;
    document.querySelector('#ios-ui').textContent = model.ios;
    document.querySelector('#shared-ui').textContent = model.shared;
    document.querySelector('#diagram-caption').textContent = model.caption;
    modelButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  });
}

const filters = document.querySelector('.filters');
const filterButtons = filters.querySelectorAll('button');
const projects = document.querySelectorAll('[data-platforms]');
const status = document.querySelector('#filter-status');

for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visible = 0;
    for (const project of projects) {
      const matches = filter === 'all' || project.dataset.platforms.split(' ').includes(filter);
      project.hidden = !matches;
      if (matches) visible += 1;
    }
    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    status.textContent = `${button.textContent} 프로젝트 ${visible}개`;
  });
}
filters.hidden = false;
