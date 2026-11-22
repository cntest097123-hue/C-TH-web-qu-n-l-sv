const storageKey = 'mgst-demo:v1';
const pageSize = 5;

const initialData = {
    version: 1,
    registrations: 3680,
    students: [
        { id: 'SV0001', name: 'Nguyễn Văn A', birthDate: '2004-01-01', gender: 'Nam', class: 'CNTT01', email: 'sv0001@example.com', status: 'Đang học' },
        { id: 'SV0002', name: 'Trần Thị B', birthDate: '2004-03-15', gender: 'Nữ', class: 'CNTT02', email: 'sv0002@example.com', status: 'Đang học' },
        { id: 'SV0003', name: 'Lê Văn C', birthDate: '2003-07-22', gender: 'Nam', class: 'KT01', email: 'sv0003@example.com', status: 'Bảo lưu' },
        { id: 'SV0004', name: 'Phạm Thị D', birthDate: '2002-11-09', gender: 'Nữ', class: 'NN01', email: 'sv0004@example.com', status: 'Đã tốt nghiệp' },
        { id: 'SV0005', name: 'Hoàng Văn E', birthDate: '2004-05-30', gender: 'Nam', class: 'QT01', email: 'sv0005@example.com', status: 'Đang học' },
        { id: 'SV0006', name: 'Đỗ Thị F', birthDate: '2004-02-14', gender: 'Nữ', class: 'CNTT01', email: 'sv0006@example.com', status: 'Đang học' },
        { id: 'SV0007', name: 'Bùi Văn G', birthDate: '2003-09-08', gender: 'Nam', class: 'CNTT02', email: 'sv0007@example.com', status: 'Bảo lưu' },
        { id: 'SV0008', name: 'Vũ Thị H', birthDate: '2004-06-19', gender: 'Nữ', class: 'KT01', email: 'sv0008@example.com', status: 'Đang học' },
        { id: 'SV0009', name: 'Ngô Văn I', birthDate: '2003-12-03', gender: 'Nam', class: 'NN01', email: 'sv0009@example.com', status: 'Đang học' },
        { id: 'SV0010', name: 'Dương Thị K', birthDate: '2002-08-27', gender: 'Nữ', class: 'QT01', email: 'sv0010@example.com', status: 'Đã tốt nghiệp' },
        { id: 'SV0011', name: 'Phan Văn L', birthDate: '2004-04-11', gender: 'Nam', class: 'CNTT01', email: 'sv0011@example.com', status: 'Đang học' },
        { id: 'SV0012', name: 'Lý Thị M', birthDate: '2003-10-25', gender: 'Nữ', class: 'CNTT02', email: 'sv0012@example.com', status: 'Đang học' },
        { id: 'SV0013', name: 'Đặng Văn N', birthDate: '2004-01-29', gender: 'Nam', class: 'KT01', email: 'sv0013@example.com', status: 'Bảo lưu' },
        { id: 'SV0014', name: 'Trịnh Thị P', birthDate: '2003-05-16', gender: 'Nữ', class: 'CNTT03', email: 'sv0014@example.com', status: 'Đang học' },
        { id: 'SV0015', name: 'Mai Văn Q', birthDate: '2004-07-07', gender: 'Nam', class: 'KT02', email: 'sv0015@example.com', status: 'Đang học' },
        { id: 'SV0016', name: 'Cao Thị R', birthDate: '2003-03-21', gender: 'Nữ', class: 'CNTT01', email: 'sv0016@example.com', status: 'Đang học' },
        { id: 'SV0017', name: 'Hồ Văn S', birthDate: '2004-09-13', gender: 'Nam', class: 'CNTT03', email: 'sv0017@example.com', status: 'Bảo lưu' },
        { id: 'SV0018', name: 'Tạ Thị T', birthDate: '2003-11-02', gender: 'Nữ', class: 'KT02', email: 'sv0018@example.com', status: 'Đang học' },
        { id: 'SV0019', name: 'Đinh Văn U', birthDate: '2004-12-18', gender: 'Nam', class: 'NN02', email: 'sv0019@example.com', status: 'Đang học' },
        { id: 'SV0020', name: 'La Thị V', birthDate: '2003-02-06', gender: 'Nữ', class: 'NN02', email: 'sv0020@example.com', status: 'Đã tốt nghiệp' },
    ],
    classes: [
        { code: 'CNTT01', name: 'Công nghệ thông tin 01', course: 'Khóa 2023', advisor: 'Nguyễn Văn M', status: 'Đang hoạt động' },
        { code: 'CNTT02', name: 'Công nghệ thông tin 02', course: 'Khóa 2023', advisor: 'Trần Thị N', status: 'Đang hoạt động' },
        { code: 'KT01', name: 'Kinh tế 01', course: 'Khóa 2022', advisor: 'Lê Văn P', status: 'Đang hoạt động' },
        { code: 'NN01', name: 'Ngôn ngữ Anh 01', course: 'Khóa 2024', advisor: 'Phạm Thị Q', status: 'Sắp mở' },
        { code: 'QT01', name: 'Quản trị kinh doanh 01', course: 'Khóa 2021', advisor: 'Hoàng Văn R', status: 'Đã kết thúc' },
        { code: 'CNTT03', name: 'Công nghệ thông tin 03', course: 'Khóa 2024', advisor: 'Đỗ Văn S', status: 'Đang hoạt động' },
        { code: 'KT02', name: 'Kinh tế 02', course: 'Khóa 2023', advisor: 'Bùi Thị T', status: 'Đang hoạt động' },
        { code: 'NN02', name: 'Ngôn ngữ Anh 02', course: 'Khóa 2022', advisor: 'Vũ Văn U', status: 'Đang hoạt động' },
    ],
    subjects: [
        { code: 'MH001', name: 'Lập trình cơ bản', credits: 3, description: 'Kiến thức nền tảng về lập trình và tư duy thuật toán', status: 'Đang mở' },
        { code: 'MH002', name: 'Cơ sở dữ liệu', credits: 3, description: 'Thiết kế, truy vấn và quản trị cơ sở dữ liệu quan hệ', status: 'Đang mở' },
        { code: 'MH003', name: 'Kinh tế vĩ mô', credits: 2, description: 'Các nguyên lý cơ bản về cung, cầu và hành vi kinh tế', status: 'Đang mở' },
        { code: 'MH004', name: 'Tiếng Anh chuyên ngành', credits: 4, description: 'Rèn luyện từ vựng và kỹ năng giao tiếp chuyên ngành', status: 'Tạm dừng' },
        { code: 'MH005', name: 'Nguyên lý marketing', credits: 3, description: 'Giới thiệu các khái niệm và chiến lược marketing', status: 'Ngừng giảng dạy' },
        { code: 'MH006', name: 'Toán cao cấp', credits: 3, description: 'Các kiến thức toán học nền tảng cho khối ngành kinh tế', status: 'Đang mở' },
        { code: 'MH007', name: 'Lập trình hướng đối tượng', credits: 4, description: 'Tư duy và kỹ thuật lập trình hướng đối tượng', status: 'Đang mở' },
        { code: 'MH008', name: 'Nguyên lý kế toán', credits: 3, description: 'Nguyên tắc ghi nhận và trình bày thông tin kế toán', status: 'Đang mở' },
        { code: 'MH009', name: 'Kỹ năng giao tiếp', credits: 2, description: 'Phát triển kỹ năng giao tiếp trong môi trường học tập', status: 'Tạm dừng' },
        { code: 'MH010', name: 'Phân tích hệ thống', credits: 3, description: 'Phương pháp khảo sát và phân tích yêu cầu hệ thống', status: 'Đang mở' },
    ],
};

const scheduleSlots = [
    { day: 'Thứ 2', startPeriod: 1, endPeriod: 3, room: 'A101' },
    { day: 'Thứ 3', startPeriod: 4, endPeriod: 6, room: 'B203' },
    { day: 'Thứ 4', startPeriod: 1, endPeriod: 2, room: 'C105' },
    { day: 'Thứ 5', startPeriod: 7, endPeriod: 10, room: 'D302' },
    { day: 'Thứ 6', startPeriod: 4, endPeriod: 6, room: 'C201' },
    { day: 'Thứ 2', startPeriod: 7, endPeriod: 9, room: 'A102' },
    { day: 'Thứ 3', startPeriod: 1, endPeriod: 3, room: 'B204' },
    { day: 'Thứ 4', startPeriod: 4, endPeriod: 6, room: 'C106' },
];

function createSampleSchedules(subjects, classes) {
    if (subjects.length === 0 || classes.length === 0) {
        return [];
    }

    return Array.from({ length: 64 }, (_, index) => {
        const classIndex = index % classes.length;
        const classCycle = Math.floor(index / classes.length);
        const slotIndex = (classCycle * 3 + classIndex) % scheduleSlots.length;
        const slot = scheduleSlots[slotIndex];

        return {
            code: `LH${String(index + 1).padStart(3, '0')}`,
            subjectCode: subjects[index % subjects.length].code,
            classCode: classes[classIndex].code,
            day: slot.day,
            startPeriod: slot.startPeriod,
            endPeriod: slot.endPeriod,
            room: slot.room,
            semester: slotIndex < 4
                ? 'Học kỳ 1 năm học 2025-2026'
                : 'Học kỳ 2 năm học 2025-2026',
        };
    });
}

initialData.schedules = createSampleSchedules(initialData.subjects, initialData.classes);

const notice = document.querySelector('[data-demo-notice]');

function showNotice(message, type = 'error') {
    if (!notice) {
        window.alert(message);
        return;
    }

    notice.hidden = false;
    notice.dataset.type = type;
    notice.setAttribute('role', type === 'error' ? 'alert' : 'status');
    notice.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
    notice.textContent = message;

    if (type === 'success') {
        window.setTimeout(() => {
            if (notice.textContent === message) {
                notice.hidden = true;
            }
        }, 3500);
    }
}

function isValidStore(data) {
    const hasStringFields = (records, fields) => records.every((record) => (
        record !== null
        && typeof record === 'object'
        && fields.every((field) => typeof record[field] === 'string')
    ));

    return data !== null
        && typeof data === 'object'
        && data.version === 1
        && Array.isArray(data.students)
        && hasStringFields(data.students, ['id', 'name', 'birthDate', 'gender', 'class', 'email', 'status'])
        && Array.isArray(data.classes)
        && hasStringFields(data.classes, ['code', 'name', 'course', 'advisor', 'status'])
        && Array.isArray(data.subjects)
        && hasStringFields(data.subjects, ['code', 'name', 'description', 'status'])
        && data.subjects.every((subject) => Number.isFinite(subject.credits))
        && (!Object.prototype.hasOwnProperty.call(data, 'schedules')
            || (
                Array.isArray(data.schedules)
                && hasStringFields(data.schedules, ['code', 'subjectCode', 'classCode', 'day', 'room', 'semester'])
                && data.schedules.every((schedule) => (
                    Number.isInteger(schedule.startPeriod)
                    && Number.isInteger(schedule.endPeriod)
                    && schedule.startPeriod >= 1
                    && schedule.endPeriod <= 12
                    && schedule.endPeriod > schedule.startPeriod
                ))
            ))
        && Number.isFinite(data.registrations);
}

function loadStore() {
    let serialized;

    try {
        serialized = window.localStorage.getItem(storageKey);
    } catch (error) {
        console.error('Không thể đọc dữ liệu demo từ LocalStorage.', error);
        showNotice('Trình duyệt không cho phép đọc LocalStorage. Dữ liệu demo chưa được tải.');
        return null;
    }

    if (serialized === null) {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(initialData));
            return structuredClone(initialData);
        } catch (error) {
            console.error('Không thể khởi tạo dữ liệu demo trong LocalStorage.', error);
            showNotice('Không thể khởi tạo dữ liệu demo trong LocalStorage.');
            return null;
        }
    }

    let data;

    try {
        data = JSON.parse(serialized);

        if (!isValidStore(data)) {
            throw new Error('Dữ liệu demo không đúng cấu trúc phiên bản hiện tại.');
        }
    } catch (error) {
        console.error('Không thể đọc dữ liệu demo đã lưu.', error);
        showNotice('Dữ liệu demo trong LocalStorage không hợp lệ. Dữ liệu hiện có được giữ nguyên.');
        return null;
    }

    if (!Object.prototype.hasOwnProperty.call(data, 'schedules')) {
        data.schedules = createSampleSchedules(data.subjects, data.classes);

        try {
            window.localStorage.setItem(storageKey, JSON.stringify(data));
        } catch (error) {
            console.error('Không thể khởi tạo dữ liệu lịch học trong LocalStorage.', error);
            showNotice('Không thể khởi tạo dữ liệu lịch học trong LocalStorage.');
            return null;
        }
    }

    return data;
}

function updateStore(update) {
    const data = loadStore();

    if (!data) {
        return false;
    }

    try {
        const shouldSave = update(data);

        if (shouldSave === false) {
            return false;
        }

        if (!isValidStore(data)) {
            throw new Error('Dữ liệu cập nhật không đúng cấu trúc.');
        }

        window.localStorage.setItem(storageKey, JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('mgst-demo-updated'));
        return true;
    } catch (error) {
        console.error('Không thể lưu thay đổi dữ liệu demo.', error);
        showNotice('Không thể lưu thay đổi vào LocalStorage. Vui lòng kiểm tra dung lượng trình duyệt.');
        return false;
    }
}

window.MgstDemoStore = {
    getData: loadStore,
    update: updateStore,
    storageKey,
};

function initStudentsPage() {
    const page = document.querySelector('[data-students-page]');

    if (!page) {
        return;
    }

    const searchInput = document.querySelector('[data-student-search]');
    const classFilter = document.querySelector('[data-student-class-filter]');
    const statusFilter = document.querySelector('[data-student-status-filter]');
    const rowsContainer = document.querySelector('[data-student-rows]');
    const countLabel = document.querySelector('[data-student-count]');
    const pagination = document.querySelector('[data-student-pagination]');
    const dialog = document.querySelector('[data-student-dialog]');
    const form = document.querySelector('[data-student-form]');
    const formError = document.querySelector('[data-student-form-error]');
    const dialogTitle = document.querySelector('[data-student-dialog-title]');
    const saveButton = document.querySelector('[data-student-form-save]');
    const formClassSelect = document.querySelector('[data-student-form-class]');
    let currentPage = 1;
    let editingStudentId = null;
    let dialogMode = 'add';

    function getStudentStatusStyle(status) {
        if (status === 'Bảo lưu') {
            return 'paused';
        }

        if (status === 'Đã tốt nghiệp') {
            return 'graduated';
        }

        return 'active';
    }

    function formatDate(date) {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    function addCell(row, value, className = '') {
        const cell = document.createElement('td');
        cell.textContent = value;

        if (className) {
            cell.className = className;
        }

        row.append(cell);
        return cell;
    }

    function createActionButton(action, student) {
        const labels = {
            view: 'Xem',
            edit: 'Chỉnh sửa',
            delete: 'Xóa',
        };
        const classes = {
            view: 'student-action-view',
            edit: 'student-action-edit',
            delete: 'student-action-delete',
        };
        const icons = {
            view: '<path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
            edit: '<path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/>',
            delete: '<path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/>',
        };
        const button = document.createElement('button');
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        button.type = 'button';
        button.className = `student-action ${classes[action]}`;
        button.setAttribute('aria-label', `${labels[action]} ${student.id}`);
        button.dataset.studentAction = action;
        button.dataset.studentId = student.id;
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = icons[action];
        button.append(icon);

        return button;
    }

    function renderClassOptions(classes) {
        const selectedFilterClass = classFilter.value;
        const selectedFormClass = formClassSelect.value;
        const filterOptions = [new Option('Tất cả lớp', '')];
        const formOptions = [new Option('Chọn lớp', '')];

        classes.forEach((classItem) => {
            filterOptions.push(new Option(classItem.code, classItem.code));
            formOptions.push(new Option(`${classItem.code} - ${classItem.name}`, classItem.code));
        });

        classFilter.replaceChildren(...filterOptions);
        formClassSelect.replaceChildren(...formOptions);
        classFilter.value = selectedFilterClass;
        formClassSelect.value = selectedFormClass;
    }

    function getFilteredStudents(students) {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
        const selectedClass = classFilter.value;
        const selectedStatus = statusFilter.value;

        return students.filter((student) => {
            const matchesSearch = searchTerm === ''
                || student.id.toLocaleLowerCase('vi').includes(searchTerm)
                || student.name.toLocaleLowerCase('vi').includes(searchTerm);

            return matchesSearch
                && (selectedClass === '' || student.class === selectedClass)
                && (selectedStatus === '' || student.status === selectedStatus);
        });
    }

    function renderRows(students, startIndex) {
        rowsContainer.replaceChildren();

        if (students.length === 0) {
            const row = document.createElement('tr');
            const cell = addCell(row, 'Không tìm thấy sinh viên phù hợp.');
            cell.colSpan = 9;
            rowsContainer.append(row);
            return;
        }

        students.forEach((student, index) => {
            const row = document.createElement('tr');
            const actionsCell = document.createElement('td');
            const actions = document.createElement('div');
            const status = document.createElement('span');

            addCell(row, String(startIndex + index + 1));
            addCell(row, student.id);
            addCell(row, student.name, 'student-name');
            addCell(row, formatDate(student.birthDate));
            addCell(row, student.gender);
            addCell(row, student.class);
            addCell(row, student.email);

            status.className = `status-badge status-${getStudentStatusStyle(student.status)}`;
            status.textContent = student.status;
            const statusCell = document.createElement('td');
            statusCell.append(status);
            row.append(statusCell);

            actions.className = 'student-actions';
            actions.append(
                createActionButton('view', student),
                createActionButton('edit', student),
                createActionButton('delete', student),
            );
            actionsCell.append(actions);
            row.append(actionsCell);
            rowsContainer.append(row);
        });
    }

    function renderPagination(totalPages) {
        const pageButtons = [];
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const firstPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
        const lastPage = Math.min(totalPages, firstPage + 4);

        previousButton.type = 'button';
        previousButton.className = 'page-button page-previous';
        previousButton.textContent = 'Trang trước';
        previousButton.disabled = currentPage === 1;
        previousButton.dataset.pagePrevious = '';

        for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber += 1) {
            const pageButton = document.createElement('button');
            pageButton.type = 'button';
            pageButton.className = `page-button${pageNumber === currentPage ? ' is-current' : ''}`;
            pageButton.textContent = String(pageNumber);
            pageButton.dataset.pageNumber = String(pageNumber);

            if (pageNumber === currentPage) {
                pageButton.setAttribute('aria-current', 'page');
            }

            pageButtons.push(pageButton);
        }

        nextButton.type = 'button';
        nextButton.className = 'page-button';
        nextButton.textContent = 'Trang sau';
        nextButton.disabled = currentPage === totalPages;
        nextButton.dataset.pageNext = '';
        pagination.replaceChildren(previousButton, ...pageButtons, nextButton);
    }

    function render() {
        const data = loadStore();

        if (!data) {
            return;
        }

        renderClassOptions(data.classes);
        const filteredStudents = getFilteredStudents(data.students);
        const totalPages = Math.max(1, Math.ceil(filteredStudents.length / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        const startIndex = (currentPage - 1) * pageSize;
        const visibleStudents = filteredStudents.slice(startIndex, startIndex + pageSize);
        const firstVisible = filteredStudents.length === 0 ? 0 : startIndex + 1;
        const lastVisible = Math.min(startIndex + pageSize, filteredStudents.length);

        renderRows(visibleStudents, startIndex);
        countLabel.textContent = `Hiển thị ${firstVisible} - ${lastVisible} trong tổng số ${filteredStudents.length} sinh viên`;
        renderPagination(totalPages);
    }

    function setFormError(message) {
        formError.textContent = message;
        formError.hidden = message === '';
    }

    function openDialog(mode, student = null) {
        const data = loadStore();

        if (!data) {
            return;
        }

        dialogMode = mode;
        editingStudentId = student ? student.id : null;
        form.reset();
        setFormError('');
        renderClassOptions(data.classes);

        const readOnly = mode === 'view';
        dialogTitle.textContent = mode === 'add'
            ? 'Thêm sinh viên'
            : mode === 'edit'
                ? 'Chỉnh sửa sinh viên'
                : 'Thông tin sinh viên';
        saveButton.hidden = readOnly;

        if (student) {
            form.elements.namedItem('id').value = student.id;
            form.elements.namedItem('name').value = student.name;
            form.elements.namedItem('birthDate').value = student.birthDate;
            form.elements.namedItem('gender').value = student.gender;
            form.elements.namedItem('class').value = student.class;
            form.elements.namedItem('email').value = student.email;
            form.elements.namedItem('status').value = student.status;
        } else {
            form.elements.namedItem('status').value = 'Đang học';
        }

        Array.from(form.elements).forEach((element) => {
            if (element.name) {
                element.disabled = readOnly;
            }
        });

        dialog.showModal();
    }

    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('[data-student-add]');

        if (addButton) {
            openDialog('add');
            return;
        }

        const actionButton = event.target.closest('[data-student-action]');

        if (actionButton) {
            const data = loadStore();
            const student = data?.students.find((item) => item.id === actionButton.dataset.studentId);

            if (!student) {
                showNotice('Không tìm thấy sinh viên trong dữ liệu đã lưu.');
                return;
            }

            if (actionButton.dataset.studentAction === 'delete') {
                if (window.confirm(`Bạn có chắc muốn xóa sinh viên ${student.id} - ${student.name}?`)) {
                    const saved = updateStore((currentData) => {
                        currentData.students = currentData.students.filter((item) => item.id !== student.id);
                    });

                    if (saved) {
                        showNotice('Đã xóa sinh viên.', 'success');
                        render();
                    }
                }

                return;
            }

            openDialog(actionButton.dataset.studentAction, student);
            return;
        }

        if (event.target.closest('[data-page-previous]')) {
            currentPage = Math.max(1, currentPage - 1);
            render();
        } else if (event.target.closest('[data-page-next]')) {
            currentPage += 1;
            render();
        } else {
            const pageButton = event.target.closest('[data-page-number]');

            if (pageButton) {
                currentPage = Number(pageButton.dataset.pageNumber);
                render();
            }
        }
    });

    document.querySelectorAll('[data-student-dialog-close]').forEach((button) => {
        button.addEventListener('click', () => dialog.close());
    });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        render();
    });
    classFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });
    statusFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setFormError('');

        if (!form.reportValidity()) {
            return;
        }

        const student = {
            id: form.elements.namedItem('id').value.trim(),
            name: form.elements.namedItem('name').value.trim(),
            birthDate: form.elements.namedItem('birthDate').value,
            gender: form.elements.namedItem('gender').value,
            class: form.elements.namedItem('class').value,
            email: form.elements.namedItem('email').value.trim(),
            status: form.elements.namedItem('status').value,
        };
        const data = loadStore();

        if (!data) {
            return;
        }

        const normalizedId = student.id.toLocaleUpperCase('vi');
        const normalizedEmail = student.email.toLocaleLowerCase('vi');
        const duplicateId = data.students.some((item) => (
            item.id.toLocaleUpperCase('vi') === normalizedId && item.id !== editingStudentId
        ));
        const duplicateEmail = data.students.some((item) => (
            item.email.toLocaleLowerCase('vi') === normalizedEmail && item.id !== editingStudentId
        ));

        if (duplicateId) {
            setFormError('Mã sinh viên đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        if (duplicateEmail) {
            setFormError('Email đã được sử dụng cho sinh viên khác.');
            return;
        }

        const saved = updateStore((currentData) => {
            if (dialogMode === 'edit') {
                const studentIndex = currentData.students.findIndex((item) => item.id === editingStudentId);

                if (studentIndex === -1) {
                    throw new Error('Sinh viên cần chỉnh sửa không còn tồn tại.');
                }

                currentData.students[studentIndex] = student;
            } else {
                currentData.students.push(student);
            }
        });

        if (saved) {
            dialog.close();
            currentPage = 1;
            render();
            showNotice(dialogMode === 'edit' ? 'Đã cập nhật sinh viên.' : 'Đã thêm sinh viên.', 'success');
        }
    });

    render();
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            render();
        }
    });
    window.addEventListener('mgst-demo-updated', render);
}

function initClassesPage() {
    const page = document.querySelector('[data-classes-page]');

    if (!page) {
        return;
    }

    const searchInput = document.querySelector('[data-class-search]');
    const courseFilter = document.querySelector('[data-class-course-filter]');
    const statusFilter = document.querySelector('[data-class-status-filter]');
    const rowsContainer = document.querySelector('[data-class-rows]');
    const countLabel = document.querySelector('[data-class-count]');
    const pagination = document.querySelector('[data-class-pagination]');
    const dialog = document.querySelector('[data-class-dialog]');
    const form = document.querySelector('[data-class-form]');
    const formError = document.querySelector('[data-class-form-error]');
    const dialogTitle = document.querySelector('[data-class-dialog-title]');
    const saveButton = document.querySelector('[data-class-form-save]');
    let currentPage = 1;
    let editingClassCode = null;
    let dialogMode = 'add';

    function getClassStatusStyle(status) {
        if (status === 'Sắp mở') {
            return 'paused';
        }

        if (status === 'Đã kết thúc') {
            return 'graduated';
        }

        return 'active';
    }

    function getStudentCount(classCode, students) {
        return students.filter((student) => student.class === classCode).length;
    }

    function addCell(row, value, className = '') {
        const cell = document.createElement('td');
        cell.textContent = String(value);

        if (className) {
            cell.className = className;
        }

        row.append(cell);
        return cell;
    }

    function createActionButton(action, classItem) {
        const labels = {
            view: 'Xem',
            edit: 'Chỉnh sửa',
            delete: 'Xóa',
        };
        const classes = {
            view: 'class-action-view',
            edit: 'class-action-edit',
            delete: 'class-action-delete',
        };
        const icons = {
            view: '<path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
            edit: '<path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/>',
            delete: '<path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/>',
        };
        const button = document.createElement('button');
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        button.type = 'button';
        button.className = `class-action ${classes[action]}`;
        button.setAttribute('aria-label', `${labels[action]} ${classItem.code}`);
        button.dataset.classAction = action;
        button.dataset.classCode = classItem.code;
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = icons[action];
        button.append(icon);

        return button;
    }

    function renderFilterOptions(classes) {
        const selectedCourse = courseFilter.value;
        const selectedStatus = statusFilter.value;
        const courses = [...new Set(classes.map((classItem) => classItem.course))];
        const statuses = [...new Set(classes.map((classItem) => classItem.status))];
        const courseOptions = [new Option('Tất cả khóa học', '')];
        const statusOptions = [new Option('Tất cả trạng thái', '')];

        courses.forEach((course) => courseOptions.push(new Option(course, course)));
        statuses.forEach((status) => statusOptions.push(new Option(status, status)));
        courseFilter.replaceChildren(...courseOptions);
        statusFilter.replaceChildren(...statusOptions);
        courseFilter.value = selectedCourse;
        statusFilter.value = selectedStatus;
    }

    function getFilteredClasses(classes) {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
        const selectedCourse = courseFilter.value;
        const selectedStatus = statusFilter.value;

        return classes.filter((classItem) => {
            const matchesSearch = searchTerm === ''
                || classItem.code.toLocaleLowerCase('vi').includes(searchTerm)
                || classItem.name.toLocaleLowerCase('vi').includes(searchTerm);

            return matchesSearch
                && (selectedCourse === '' || classItem.course === selectedCourse)
                && (selectedStatus === '' || classItem.status === selectedStatus);
        });
    }

    function renderRows(classes, students, startIndex) {
        rowsContainer.replaceChildren();

        if (classes.length === 0) {
            const row = document.createElement('tr');
            const cell = addCell(row, 'Không tìm thấy lớp học phù hợp.');
            cell.colSpan = 8;
            rowsContainer.append(row);
            return;
        }

        classes.forEach((classItem, index) => {
            const row = document.createElement('tr');
            const status = document.createElement('span');
            const statusCell = document.createElement('td');
            const actionsCell = document.createElement('td');
            const actions = document.createElement('div');

            addCell(row, String(startIndex + index + 1));
            addCell(row, classItem.code);
            addCell(row, classItem.name, 'class-name');
            addCell(row, classItem.course);
            addCell(row, getStudentCount(classItem.code, students));
            addCell(row, classItem.advisor);

            status.className = `status-badge status-${getClassStatusStyle(classItem.status)}`;
            status.textContent = classItem.status;
            statusCell.append(status);
            row.append(statusCell);

            actions.className = 'classes-actions';
            actions.append(
                createActionButton('view', classItem),
                createActionButton('edit', classItem),
                createActionButton('delete', classItem),
            );
            actionsCell.append(actions);
            row.append(actionsCell);
            rowsContainer.append(row);
        });
    }

    function renderPagination(totalPages) {
        const pageButtons = [];
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const firstPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
        const lastPage = Math.min(totalPages, firstPage + 4);

        previousButton.type = 'button';
        previousButton.className = 'class-page-button class-page-previous';
        previousButton.textContent = 'Trang trước';
        previousButton.disabled = currentPage === 1;
        previousButton.dataset.classPagePrevious = '';

        for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber += 1) {
            const pageButton = document.createElement('button');
            pageButton.type = 'button';
            pageButton.className = `class-page-button${pageNumber === currentPage ? ' is-current' : ''}`;
            pageButton.textContent = String(pageNumber);
            pageButton.dataset.classPageNumber = String(pageNumber);

            if (pageNumber === currentPage) {
                pageButton.setAttribute('aria-current', 'page');
            }

            pageButtons.push(pageButton);
        }

        nextButton.type = 'button';
        nextButton.className = 'class-page-button';
        nextButton.textContent = 'Trang sau';
        nextButton.disabled = currentPage === totalPages;
        nextButton.dataset.classPageNext = '';
        pagination.replaceChildren(previousButton, ...pageButtons, nextButton);
    }

    function render() {
        const data = loadStore();

        if (!data) {
            return;
        }

        renderFilterOptions(data.classes);
        const filteredClasses = getFilteredClasses(data.classes);
        const totalPages = Math.max(1, Math.ceil(filteredClasses.length / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        const startIndex = (currentPage - 1) * pageSize;
        const visibleClasses = filteredClasses.slice(startIndex, startIndex + pageSize);
        const firstVisible = filteredClasses.length === 0 ? 0 : startIndex + 1;
        const lastVisible = Math.min(startIndex + pageSize, filteredClasses.length);

        renderRows(visibleClasses, data.students, startIndex);
        countLabel.textContent = `Hiển thị ${firstVisible} - ${lastVisible} trong tổng số ${filteredClasses.length} lớp học`;
        renderPagination(totalPages);
    }

    function setFormError(message) {
        formError.textContent = message;
        formError.hidden = message === '';
    }

    function openDialog(mode, classItem = null) {
        const data = loadStore();

        if (!data) {
            return;
        }

        dialogMode = mode;
        editingClassCode = classItem ? classItem.code : null;
        form.reset();
        setFormError('');

        const readOnly = mode === 'view';
        dialogTitle.textContent = mode === 'add'
            ? 'Thêm lớp học'
            : mode === 'edit'
                ? 'Chỉnh sửa lớp học'
                : 'Thông tin lớp học';
        saveButton.hidden = readOnly;

        if (classItem) {
            form.elements.namedItem('code').value = classItem.code;
            form.elements.namedItem('name').value = classItem.name;
            form.elements.namedItem('course').value = classItem.course;
            form.elements.namedItem('advisor').value = classItem.advisor;
            form.elements.namedItem('status').value = classItem.status;
            form.elements.namedItem('studentCount').value = String(getStudentCount(classItem.code, data.students));
        } else {
            form.elements.namedItem('status').value = 'Đang hoạt động';
            form.elements.namedItem('studentCount').value = '0';
        }

        Array.from(form.elements).forEach((element) => {
            if (element.name) {
                element.disabled = readOnly || element.name === 'studentCount';
            }
        });

        dialog.showModal();
    }

    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('[data-class-add]');

        if (addButton) {
            openDialog('add');
            return;
        }

        const actionButton = event.target.closest('[data-class-action]');

        if (actionButton) {
            const data = loadStore();
            const classItem = data?.classes.find((item) => item.code === actionButton.dataset.classCode);

            if (!classItem) {
                showNotice('Không tìm thấy lớp học trong dữ liệu đã lưu.');
                return;
            }

            if (actionButton.dataset.classAction === 'delete') {
                if (getStudentCount(classItem.code, data.students) > 0) {
                    showNotice('Không thể xóa lớp đang có sinh viên. Vui lòng chuyển sinh viên sang lớp khác trước.');
                    return;
                }

                if (data.schedules.some((schedule) => schedule.classCode === classItem.code)) {
                    showNotice('Không thể xóa lớp đang có lịch học. Vui lòng xóa hoặc chuyển lịch học trước.');
                    return;
                }

                if (window.confirm(`Bạn có chắc muốn xóa lớp ${classItem.code} - ${classItem.name}?`)) {
                    let hasAssignedStudents = false;
                    let hasAssignedSchedules = false;
                    const saved = updateStore((currentData) => {
                        hasAssignedStudents = currentData.students.some((student) => student.class === classItem.code);
                        hasAssignedSchedules = currentData.schedules.some((schedule) => schedule.classCode === classItem.code);

                        if (hasAssignedStudents || hasAssignedSchedules) {
                            return false;
                        }

                        currentData.classes = currentData.classes.filter((item) => item.code !== classItem.code);
                    });

                    if (hasAssignedStudents) {
                        showNotice('Không thể xóa lớp đang có sinh viên. Vui lòng chuyển sinh viên sang lớp khác trước.');
                    } else if (hasAssignedSchedules) {
                        showNotice('Không thể xóa lớp đang có lịch học. Vui lòng xóa hoặc chuyển lịch học trước.');
                    } else if (saved) {
                        showNotice('Đã xóa lớp học.', 'success');
                        render();
                    }
                }

                return;
            }

            openDialog(actionButton.dataset.classAction, classItem);
            return;
        }

        if (event.target.closest('[data-class-page-previous]')) {
            currentPage = Math.max(1, currentPage - 1);
            render();
        } else if (event.target.closest('[data-class-page-next]')) {
            currentPage += 1;
            render();
        } else {
            const pageButton = event.target.closest('[data-class-page-number]');

            if (pageButton) {
                currentPage = Number(pageButton.dataset.classPageNumber);
                render();
            }
        }
    });

    document.querySelectorAll('[data-class-dialog-close]').forEach((button) => {
        button.addEventListener('click', () => dialog.close());
    });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        render();
    });
    courseFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });
    statusFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setFormError('');

        if (!form.reportValidity()) {
            return;
        }

        const classItem = {
            code: form.elements.namedItem('code').value.trim().toLocaleUpperCase('vi'),
            name: form.elements.namedItem('name').value.trim(),
            course: form.elements.namedItem('course').value.trim(),
            advisor: form.elements.namedItem('advisor').value.trim(),
            status: form.elements.namedItem('status').value,
        };
        const data = loadStore();

        if (!data) {
            return;
        }

        const normalizedCode = classItem.code.toLocaleUpperCase('vi');
        const duplicateCode = data.classes.some((item) => (
            item.code.toLocaleUpperCase('vi') === normalizedCode && item.code !== editingClassCode
        ));

        if (duplicateCode) {
            setFormError('Mã lớp đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        const saved = updateStore((currentData) => {
            if (dialogMode === 'edit') {
                const classIndex = currentData.classes.findIndex((item) => item.code === editingClassCode);

                if (classIndex === -1) {
                    throw new Error('Lớp học cần chỉnh sửa không còn tồn tại.');
                }

                currentData.classes[classIndex] = { ...currentData.classes[classIndex], ...classItem };

                if (editingClassCode !== classItem.code) {
                    currentData.students.forEach((student) => {
                        if (student.class === editingClassCode) {
                            student.class = classItem.code;
                        }
                    });
                    currentData.schedules.forEach((schedule) => {
                        if (schedule.classCode === editingClassCode) {
                            schedule.classCode = classItem.code;
                        }
                    });
                }
            } else {
                currentData.classes.push(classItem);
            }
        });

        if (saved) {
            dialog.close();
            currentPage = 1;
            render();
            showNotice(dialogMode === 'edit' ? 'Đã cập nhật lớp học.' : 'Đã thêm lớp học.', 'success');
        }
    });

    render();
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            render();
        }
    });
    window.addEventListener('mgst-demo-updated', render);
}

function initSubjectsPage() {
    const page = document.querySelector('[data-subjects-page]');

    if (!page) {
        return;
    }

    const searchInput = document.querySelector('[data-subject-search]');
    const creditFilter = document.querySelector('[data-subject-credit-filter]');
    const statusFilter = document.querySelector('[data-subject-status-filter]');
    const rowsContainer = document.querySelector('[data-subject-rows]');
    const countLabel = document.querySelector('[data-subject-count]');
    const pagination = document.querySelector('[data-subject-pagination]');
    const dialog = document.querySelector('[data-subject-dialog]');
    const form = document.querySelector('[data-subject-form]');
    const formError = document.querySelector('[data-subject-form-error]');
    const dialogTitle = document.querySelector('[data-subject-dialog-title]');
    const saveButton = document.querySelector('[data-subject-form-save]');
    let currentPage = 1;
    let editingSubjectCode = null;
    let dialogMode = 'add';

    function getSubjectStatusStyle(status) {
        if (status === 'Tạm dừng') {
            return 'paused';
        }

        if (status === 'Ngừng giảng dạy') {
            return 'graduated';
        }

        return 'active';
    }

    function addCell(row, value, className = '') {
        const cell = document.createElement('td');
        cell.textContent = String(value);

        if (className) {
            cell.className = className;
        }

        row.append(cell);
        return cell;
    }

    function createActionButton(action, subject) {
        const labels = {
            view: 'Xem',
            edit: 'Chỉnh sửa',
            delete: 'Xóa',
        };
        const classes = {
            view: 'subject-action-view',
            edit: 'subject-action-edit',
            delete: 'subject-action-delete',
        };
        const icons = {
            view: '<path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
            edit: '<path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/>',
            delete: '<path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/>',
        };
        const button = document.createElement('button');
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        button.type = 'button';
        button.className = `subject-action ${classes[action]}`;
        button.setAttribute('aria-label', `${labels[action]} ${subject.code}`);
        button.dataset.subjectAction = action;
        button.dataset.subjectCode = subject.code;
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = icons[action];
        button.append(icon);

        return button;
    }

    function renderFilterOptions(subjects) {
        const selectedCredits = creditFilter.value;
        const selectedStatus = statusFilter.value;
        const credits = [...new Set(subjects.map((subject) => subject.credits))]
            .sort((first, second) => first - second);
        const statuses = [...new Set(subjects.map((subject) => subject.status))];
        const creditOptions = [new Option('Tất cả số tín chỉ', '')];
        const statusOptions = [new Option('Tất cả trạng thái', '')];

        credits.forEach((value) => creditOptions.push(new Option(`${value} tín chỉ`, String(value))));
        statuses.forEach((status) => statusOptions.push(new Option(status, status)));
        creditFilter.replaceChildren(...creditOptions);
        statusFilter.replaceChildren(...statusOptions);
        creditFilter.value = selectedCredits;
        statusFilter.value = selectedStatus;
    }

    function getFilteredSubjects(subjects) {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
        const selectedCredits = creditFilter.value;
        const selectedStatus = statusFilter.value;

        return subjects.filter((subject) => {
            const matchesSearch = searchTerm === ''
                || subject.code.toLocaleLowerCase('vi').includes(searchTerm)
                || subject.name.toLocaleLowerCase('vi').includes(searchTerm);

            return matchesSearch
                && (selectedCredits === '' || String(subject.credits) === selectedCredits)
                && (selectedStatus === '' || subject.status === selectedStatus);
        });
    }

    function renderRows(subjects, startIndex) {
        rowsContainer.replaceChildren();

        if (subjects.length === 0) {
            const row = document.createElement('tr');
            const cell = addCell(row, 'Không tìm thấy môn học phù hợp.');
            cell.colSpan = 7;
            rowsContainer.append(row);
            return;
        }

        subjects.forEach((subject, index) => {
            const row = document.createElement('tr');
            const status = document.createElement('span');
            const statusCell = document.createElement('td');
            const actionsCell = document.createElement('td');
            const actions = document.createElement('div');

            addCell(row, String(startIndex + index + 1));
            addCell(row, subject.code);
            addCell(row, subject.name, 'subject-name');
            addCell(row, subject.credits);
            addCell(row, subject.description, 'subject-description');

            status.className = `status-badge status-${getSubjectStatusStyle(subject.status)}`;
            status.textContent = subject.status;
            statusCell.append(status);
            row.append(statusCell);

            actions.className = 'subjects-actions';
            actions.append(
                createActionButton('view', subject),
                createActionButton('edit', subject),
                createActionButton('delete', subject),
            );
            actionsCell.append(actions);
            row.append(actionsCell);
            rowsContainer.append(row);
        });
    }

    function renderPagination(totalPages) {
        const pageButtons = [];
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const firstPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
        const lastPage = Math.min(totalPages, firstPage + 4);

        previousButton.type = 'button';
        previousButton.className = 'subject-page-button subject-page-previous';
        previousButton.textContent = 'Trang trước';
        previousButton.disabled = currentPage === 1;
        previousButton.dataset.subjectPagePrevious = '';

        for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber += 1) {
            const pageButton = document.createElement('button');
            pageButton.type = 'button';
            pageButton.className = `subject-page-button${pageNumber === currentPage ? ' is-current' : ''}`;
            pageButton.textContent = String(pageNumber);
            pageButton.dataset.subjectPageNumber = String(pageNumber);

            if (pageNumber === currentPage) {
                pageButton.setAttribute('aria-current', 'page');
            }

            pageButtons.push(pageButton);
        }

        nextButton.type = 'button';
        nextButton.className = 'subject-page-button';
        nextButton.textContent = 'Trang sau';
        nextButton.disabled = currentPage === totalPages;
        nextButton.dataset.subjectPageNext = '';
        pagination.replaceChildren(previousButton, ...pageButtons, nextButton);
    }

    function render() {
        const data = loadStore();

        if (!data) {
            return;
        }

        renderFilterOptions(data.subjects);
        const filteredSubjects = getFilteredSubjects(data.subjects);
        const totalPages = Math.max(1, Math.ceil(filteredSubjects.length / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        const startIndex = (currentPage - 1) * pageSize;
        const visibleSubjects = filteredSubjects.slice(startIndex, startIndex + pageSize);
        const firstVisible = filteredSubjects.length === 0 ? 0 : startIndex + 1;
        const lastVisible = Math.min(startIndex + pageSize, filteredSubjects.length);

        renderRows(visibleSubjects, startIndex);
        countLabel.textContent = `Hiển thị ${firstVisible} - ${lastVisible} trong tổng số ${filteredSubjects.length} môn học`;
        renderPagination(totalPages);
    }

    function setFormError(message) {
        formError.textContent = message;
        formError.hidden = message === '';
    }

    function openDialog(mode, subject = null) {
        const data = loadStore();

        if (!data) {
            return;
        }

        const currentSubject = subject
            ? data.subjects.find((item) => item.code === subject.code)
            : null;

        if (subject && !currentSubject) {
            showNotice('Không tìm thấy môn học trong dữ liệu đã lưu.');
            return;
        }

        dialogMode = mode;
        editingSubjectCode = currentSubject ? currentSubject.code : null;
        form.reset();
        setFormError('');

        const readOnly = mode === 'view';
        dialogTitle.textContent = mode === 'add'
            ? 'Thêm môn học'
            : mode === 'edit'
                ? 'Chỉnh sửa môn học'
                : 'Thông tin môn học';
        saveButton.hidden = readOnly;

        if (currentSubject) {
            form.elements.namedItem('code').value = currentSubject.code;
            form.elements.namedItem('name').value = currentSubject.name;
            form.elements.namedItem('credits').value = String(currentSubject.credits);
            form.elements.namedItem('description').value = currentSubject.description;
            form.elements.namedItem('status').value = currentSubject.status;
        } else {
            form.elements.namedItem('credits').value = '3';
            form.elements.namedItem('status').value = 'Đang mở';
        }

        Array.from(form.elements).forEach((element) => {
            if (element.name) {
                element.disabled = readOnly;
            }
        });

        dialog.showModal();
    }

    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('[data-subject-add]');

        if (addButton) {
            openDialog('add');
            return;
        }

        const actionButton = event.target.closest('[data-subject-action]');

        if (actionButton) {
            const data = loadStore();
            const subject = data?.subjects.find((item) => item.code === actionButton.dataset.subjectCode);

            if (!subject) {
                showNotice('Không tìm thấy môn học trong dữ liệu đã lưu.');
                return;
            }

            if (actionButton.dataset.subjectAction === 'delete') {
                if (data.schedules.some((schedule) => schedule.subjectCode === subject.code)) {
                    showNotice('Không thể xóa môn học đang có lịch học. Vui lòng xóa hoặc chuyển lịch học trước.');
                    return;
                }

                if (window.confirm(`Bạn có chắc muốn xóa môn học ${subject.code} - ${subject.name}?`)) {
                    let hasAssignedSchedules = false;
                    const saved = updateStore((currentData) => {
                        const subjectIndex = currentData.subjects.findIndex((item) => item.code === subject.code);

                        if (subjectIndex === -1) {
                            throw new Error('Môn học cần xóa không còn tồn tại.');
                        }

                        hasAssignedSchedules = currentData.schedules.some((schedule) => schedule.subjectCode === subject.code);

                        if (hasAssignedSchedules) {
                            return false;
                        }

                        currentData.subjects.splice(subjectIndex, 1);
                    });

                    if (hasAssignedSchedules) {
                        showNotice('Không thể xóa môn học đang có lịch học. Vui lòng xóa hoặc chuyển lịch học trước.');
                    } else if (saved) {
                        showNotice('Đã xóa môn học.', 'success');
                        render();
                    }
                }

                return;
            }

            openDialog(actionButton.dataset.subjectAction, subject);
            return;
        }

        if (event.target.closest('[data-subject-page-previous]')) {
            currentPage = Math.max(1, currentPage - 1);
            render();
        } else if (event.target.closest('[data-subject-page-next]')) {
            currentPage += 1;
            render();
        } else {
            const pageButton = event.target.closest('[data-subject-page-number]');

            if (pageButton) {
                currentPage = Number(pageButton.dataset.subjectPageNumber);
                render();
            }
        }
    });

    document.querySelectorAll('[data-subject-dialog-close]').forEach((button) => {
        button.addEventListener('click', () => dialog.close());
    });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        render();
    });
    creditFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });
    statusFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setFormError('');

        if (!form.reportValidity()) {
            return;
        }

        const subject = {
            code: form.elements.namedItem('code').value.trim().toLocaleUpperCase('vi'),
            name: form.elements.namedItem('name').value.trim(),
            credits: form.elements.namedItem('credits').valueAsNumber,
            description: form.elements.namedItem('description').value.trim(),
            status: form.elements.namedItem('status').value,
        };
        const data = loadStore();

        if (!data) {
            return;
        }

        const normalizedCode = subject.code.toLocaleUpperCase('vi');
        const hasDuplicateCode = (subjects) => subjects.some((item) => (
            item.code.toLocaleUpperCase('vi') === normalizedCode && item.code !== editingSubjectCode
        ));

        if (hasDuplicateCode(data.subjects)) {
            setFormError('Mã môn học đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        let duplicateDuringSave = false;
        const saved = updateStore((currentData) => {
            duplicateDuringSave = hasDuplicateCode(currentData.subjects);

            if (duplicateDuringSave) {
                return false;
            }

            if (dialogMode === 'edit') {
                const subjectIndex = currentData.subjects.findIndex((item) => item.code === editingSubjectCode);

                if (subjectIndex === -1) {
                    throw new Error('Môn học cần chỉnh sửa không còn tồn tại.');
                }

                currentData.subjects[subjectIndex] = subject;

                if (editingSubjectCode !== subject.code) {
                    currentData.schedules.forEach((schedule) => {
                        if (schedule.subjectCode === editingSubjectCode) {
                            schedule.subjectCode = subject.code;
                        }
                    });
                }
            } else {
                currentData.subjects.push(subject);
            }
        });

        if (duplicateDuringSave) {
            setFormError('Mã môn học đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        if (saved) {
            dialog.close();
            currentPage = 1;
            render();
            showNotice(dialogMode === 'edit' ? 'Đã cập nhật môn học.' : 'Đã thêm môn học.', 'success');
        }
    });

    render();
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            render();
        }
    });
    window.addEventListener('mgst-demo-updated', render);
}

function initSchedulesPage() {
    const page = document.querySelector('[data-schedules-page]');

    if (!page) {
        return;
    }

    const searchInput = document.querySelector('[data-schedule-search]');
    const classFilter = document.querySelector('[data-schedule-class-filter]');
    const dayFilter = document.querySelector('[data-schedule-day-filter]');
    const semesterFilter = document.querySelector('[data-schedule-semester-filter]');
    const rowsContainer = document.querySelector('[data-schedule-rows]');
    const countLabel = document.querySelector('[data-schedule-count]');
    const pagination = document.querySelector('[data-schedule-pagination]');
    const dialog = document.querySelector('[data-schedule-dialog]');
    const form = document.querySelector('[data-schedule-form]');
    const formError = document.querySelector('[data-schedule-form-error]');
    const dialogTitle = document.querySelector('[data-schedule-dialog-title]');
    const saveButton = document.querySelector('[data-schedule-form-save]');
    const subjectOptions = document.querySelector('[data-schedule-form-subject]');
    const classOptions = document.querySelector('[data-schedule-form-class]');
    const dayOptions = document.querySelector('[data-schedule-form-day]');
    const semesterOptions = document.querySelector('[data-schedule-form-semester]');
    const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
    const defaultSemesters = [
        'Học kỳ 1 năm học 2025-2026',
        'Học kỳ 2 năm học 2025-2026',
    ];
    let currentPage = 1;
    let editingScheduleCode = null;
    let dialogMode = 'add';

    function addCell(row, value, className = '') {
        const cell = document.createElement('td');
        cell.textContent = value;

        if (className !== '') {
            cell.className = className;
        }

        row.append(cell);

        return cell;
    }

    function replaceOptions(select, placeholder, options, selectedValue = '') {
        const optionElements = [new Option(placeholder, '')];

        options.forEach((option) => {
            optionElements.push(new Option(option.label, option.value));
        });

        select.replaceChildren(...optionElements);
        select.value = options.some((option) => option.value === selectedValue) ? selectedValue : '';
    }

    function renderFilterOptions(data) {
        const selectedClass = classFilter.value;
        const selectedDay = dayFilter.value;
        const selectedSemester = semesterFilter.value;

        replaceOptions(
            classFilter,
            'Tất cả lớp',
            data.classes.map((classItem) => ({ value: classItem.code, label: classItem.code })),
            selectedClass,
        );
        replaceOptions(
            dayFilter,
            'Tất cả các thứ',
            days.map((day) => ({ value: day, label: day })),
            selectedDay,
        );
        replaceOptions(
            semesterFilter,
            'Tất cả học kỳ',
            [...new Set(data.schedules.map((schedule) => schedule.semester))]
                .map((semester) => ({ value: semester, label: semester })),
            selectedSemester,
        );
    }

    function renderFormOptions(data) {
        const selectedSubject = subjectOptions.value;
        const selectedClass = classOptions.value;
        const selectedDay = dayOptions.value;
        const selectedSemester = semesterOptions.value;
        const semesters = [...new Set([
            ...defaultSemesters,
            ...data.schedules.map((schedule) => schedule.semester),
        ])];

        replaceOptions(
            subjectOptions,
            data.subjects.length > 0 ? 'Chọn môn học' : 'Chưa có môn học',
            data.subjects.map((subject) => ({
                value: subject.code,
                label: `${subject.code} - ${subject.name}`,
            })),
            selectedSubject,
        );
        replaceOptions(
            classOptions,
            data.classes.length > 0 ? 'Chọn lớp' : 'Chưa có lớp học',
            data.classes.map((classItem) => ({
                value: classItem.code,
                label: classItem.code,
            })),
            selectedClass,
        );
        replaceOptions(
            dayOptions,
            'Chọn thứ',
            days.map((day) => ({ value: day, label: day })),
            selectedDay,
        );
        replaceOptions(
            semesterOptions,
            'Chọn học kỳ',
            semesters.map((semester) => ({ value: semester, label: semester })),
            selectedSemester,
        );
    }

    function getFilteredSchedules(data) {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
        const selectedClass = classFilter.value;
        const selectedDay = dayFilter.value;
        const selectedSemester = semesterFilter.value;

        return data.schedules.filter((schedule) => {
            const subject = data.subjects.find((item) => item.code === schedule.subjectCode);
            const searchableText = `${schedule.subjectCode} ${subject ? subject.name : ''}`
                .toLocaleLowerCase('vi');
            const matchesSearch = searchTerm === '' || searchableText.includes(searchTerm);

            return matchesSearch
                && (selectedClass === '' || schedule.classCode === selectedClass)
                && (selectedDay === '' || schedule.day === selectedDay)
                && (selectedSemester === '' || schedule.semester === selectedSemester);
        });
    }

    function createActionButton(action, schedule) {
        const button = document.createElement('button');
        const icon = document.createElement('span');
        const labels = {
            view: 'Xem',
            edit: 'Chỉnh sửa',
            delete: 'Xóa',
        };
        const icons = {
            view: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>',
            edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5zM13.8 6.7l3.5 3.5"/></svg>',
            delete: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg>',
        };

        button.type = 'button';
        button.className = `schedule-action schedule-action-${action}`;
        button.dataset.scheduleAction = action;
        button.dataset.scheduleCode = schedule.code;
        button.setAttribute('aria-label', `${labels[action]} ${schedule.code}`);
        icon.innerHTML = icons[action];
        button.append(icon);

        return button;
    }

    function renderRows(schedules, data, startIndex) {
        rowsContainer.replaceChildren();

        if (schedules.length === 0) {
            const row = document.createElement('tr');
            const cell = addCell(row, 'Không tìm thấy lịch học phù hợp.');
            cell.colSpan = 9;
            rowsContainer.append(row);
            return;
        }

        schedules.forEach((schedule, index) => {
            const row = document.createElement('tr');
            const actionsCell = document.createElement('td');
            const actions = document.createElement('div');
            const subject = data.subjects.find((item) => item.code === schedule.subjectCode);

            addCell(row, String(startIndex + index + 1));
            addCell(row, schedule.code);
            addCell(row, subject ? subject.name : schedule.subjectCode, 'schedule-subject-name');
            addCell(row, schedule.classCode);
            addCell(row, schedule.day);
            addCell(row, `Tiết ${schedule.startPeriod}`);
            addCell(row, `Tiết ${schedule.endPeriod}`);
            addCell(row, schedule.room);

            actions.className = 'schedules-actions';
            actions.append(
                createActionButton('view', schedule),
                createActionButton('edit', schedule),
                createActionButton('delete', schedule),
            );
            actionsCell.append(actions);
            row.append(actionsCell);
            rowsContainer.append(row);
        });
    }

    function renderPagination(totalPages) {
        const pageButtons = [];
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const firstPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
        const lastPage = Math.min(totalPages, firstPage + 4);

        previousButton.type = 'button';
        previousButton.className = 'schedule-page-button schedule-page-previous';
        previousButton.textContent = 'Trang trước';
        previousButton.disabled = currentPage === 1;
        previousButton.dataset.schedulePagePrevious = '';

        for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber += 1) {
            const pageButton = document.createElement('button');
            pageButton.type = 'button';
            pageButton.className = `schedule-page-button${pageNumber === currentPage ? ' is-current' : ''}`;
            pageButton.textContent = String(pageNumber);
            pageButton.dataset.schedulePageNumber = String(pageNumber);

            if (pageNumber === currentPage) {
                pageButton.setAttribute('aria-current', 'page');
            }

            pageButtons.push(pageButton);
        }

        nextButton.type = 'button';
        nextButton.className = 'schedule-page-button';
        nextButton.textContent = 'Trang sau';
        nextButton.disabled = currentPage === totalPages;
        nextButton.dataset.schedulePageNext = '';
        pagination.replaceChildren(previousButton, ...pageButtons, nextButton);
    }

    function render() {
        const data = loadStore();

        if (!data) {
            return;
        }

        renderFilterOptions(data);
        renderFormOptions(data);

        const filteredSchedules = getFilteredSchedules(data);
        const totalPages = Math.max(1, Math.ceil(filteredSchedules.length / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        const startIndex = (currentPage - 1) * pageSize;
        const visibleSchedules = filteredSchedules.slice(startIndex, startIndex + pageSize);
        const firstVisible = filteredSchedules.length === 0 ? 0 : startIndex + 1;
        const lastVisible = Math.min(startIndex + pageSize, filteredSchedules.length);

        renderRows(visibleSchedules, data, startIndex);
        countLabel.textContent = `Hiển thị ${firstVisible} - ${lastVisible} trong tổng số ${filteredSchedules.length} lịch học`;
        renderPagination(totalPages);
    }

    function setFormError(message) {
        formError.textContent = message;
        formError.hidden = message === '';
    }

    function openDialog(mode, schedule = null) {
        const data = loadStore();

        if (!data) {
            return;
        }

        const currentSchedule = schedule
            ? data.schedules.find((item) => item.code === schedule.code)
            : null;

        if (schedule && !currentSchedule) {
            showNotice('Không tìm thấy lịch học trong dữ liệu đã lưu.');
            return;
        }

        if (mode === 'add' && (data.subjects.length === 0 || data.classes.length === 0)) {
            showNotice('Cần có ít nhất một môn học và một lớp trước khi thêm lịch học.');
            return;
        }

        dialogMode = mode;
        editingScheduleCode = currentSchedule ? currentSchedule.code : null;
        form.reset();
        setFormError('');
        renderFormOptions(data);

        const readOnly = mode === 'view';
        dialogTitle.textContent = mode === 'add'
            ? 'Thêm lịch học'
            : mode === 'edit'
                ? 'Chỉnh sửa lịch học'
                : 'Thông tin lịch học';
        saveButton.hidden = readOnly;

        if (currentSchedule) {
            form.elements.namedItem('code').value = currentSchedule.code;
            form.elements.namedItem('subjectCode').value = currentSchedule.subjectCode;
            form.elements.namedItem('classCode').value = currentSchedule.classCode;
            form.elements.namedItem('day').value = currentSchedule.day;
            form.elements.namedItem('startPeriod').value = String(currentSchedule.startPeriod);
            form.elements.namedItem('endPeriod').value = String(currentSchedule.endPeriod);
            form.elements.namedItem('room').value = currentSchedule.room;
            form.elements.namedItem('semester').value = currentSchedule.semester;
        } else {
            form.elements.namedItem('day').value = days[0];
            form.elements.namedItem('semester').value = defaultSemesters[0];
        }

        Array.from(form.elements).forEach((element) => {
            if (element.name) {
                element.disabled = readOnly;
            }
        });

        dialog.showModal();
    }

    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('[data-schedule-add]');

        if (addButton) {
            openDialog('add');
            return;
        }

        const actionButton = event.target.closest('[data-schedule-action]');

        if (actionButton) {
            const data = loadStore();
            const schedule = data?.schedules.find((item) => item.code === actionButton.dataset.scheduleCode);

            if (!schedule) {
                showNotice('Không tìm thấy lịch học trong dữ liệu đã lưu.');
                return;
            }

            if (actionButton.dataset.scheduleAction === 'delete') {
                if (window.confirm(`Bạn có chắc muốn xóa lịch học ${schedule.code}?`)) {
                    const saved = updateStore((currentData) => {
                        const scheduleIndex = currentData.schedules.findIndex((item) => item.code === schedule.code);

                        if (scheduleIndex === -1) {
                            throw new Error('Lịch học cần xóa không còn tồn tại.');
                        }

                        currentData.schedules.splice(scheduleIndex, 1);
                    });

                    if (saved) {
                        showNotice('Đã xóa lịch học.', 'success');
                        render();
                    }
                }

                return;
            }

            openDialog(actionButton.dataset.scheduleAction, schedule);
            return;
        }

        if (event.target.closest('[data-schedule-page-previous]')) {
            currentPage = Math.max(1, currentPage - 1);
            render();
        } else if (event.target.closest('[data-schedule-page-next]')) {
            currentPage += 1;
            render();
        } else {
            const pageButton = event.target.closest('[data-schedule-page-number]');

            if (pageButton) {
                currentPage = Number(pageButton.dataset.schedulePageNumber);
                render();
            }
        }
    });

    document.querySelectorAll('[data-schedule-dialog-close]').forEach((button) => {
        button.addEventListener('click', () => dialog.close());
    });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        render();
    });
    classFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });
    dayFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });
    semesterFilter.addEventListener('change', () => {
        currentPage = 1;
        render();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setFormError('');

        if (!form.reportValidity()) {
            return;
        }

        const schedule = {
            code: form.elements.namedItem('code').value.trim().toLocaleUpperCase('vi'),
            subjectCode: form.elements.namedItem('subjectCode').value,
            classCode: form.elements.namedItem('classCode').value,
            day: form.elements.namedItem('day').value,
            startPeriod: form.elements.namedItem('startPeriod').valueAsNumber,
            endPeriod: form.elements.namedItem('endPeriod').valueAsNumber,
            room: form.elements.namedItem('room').value.trim(),
            semester: form.elements.namedItem('semester').value,
        };
        const data = loadStore();

        if (!data) {
            return;
        }

        if (schedule.code === '' || schedule.room === '') {
            setFormError('Mã lịch học và phòng học không được để trống.');
            return;
        }

        if (!Number.isInteger(schedule.startPeriod)
            || !Number.isInteger(schedule.endPeriod)
            || schedule.startPeriod < 1
            || schedule.endPeriod > 12
            || schedule.endPeriod <= schedule.startPeriod) {
            setFormError('Tiết kết thúc phải lớn hơn tiết bắt đầu và nằm trong khoảng 1 đến 12.');
            return;
        }

        const hasDuplicateCode = (schedules) => schedules.some((item) => (
            item.code.toLocaleUpperCase('vi') === schedule.code
            && item.code !== editingScheduleCode
        ));

        if (hasDuplicateCode(data.schedules)) {
            setFormError('Mã lịch học đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        let duplicateDuringSave = false;
        let missingReferenceDuringSave = false;
        const saved = updateStore((currentData) => {
            duplicateDuringSave = hasDuplicateCode(currentData.schedules);
            missingReferenceDuringSave = !currentData.subjects.some((item) => item.code === schedule.subjectCode)
                || !currentData.classes.some((item) => item.code === schedule.classCode);

            if (duplicateDuringSave || missingReferenceDuringSave) {
                return false;
            }

            if (dialogMode === 'edit') {
                const scheduleIndex = currentData.schedules.findIndex((item) => item.code === editingScheduleCode);

                if (scheduleIndex === -1) {
                    throw new Error('Lịch học cần chỉnh sửa không còn tồn tại.');
                }

                currentData.schedules[scheduleIndex] = schedule;
            } else {
                currentData.schedules.push(schedule);
            }
        });

        if (duplicateDuringSave) {
            setFormError('Mã lịch học đã tồn tại. Vui lòng nhập mã khác.');
            return;
        }

        if (missingReferenceDuringSave) {
            setFormError('Môn học hoặc lớp đã bị xóa. Vui lòng chọn lại dữ liệu hợp lệ.');
            return;
        }

        if (saved) {
            dialog.close();
            currentPage = 1;
            render();
            showNotice(dialogMode === 'edit' ? 'Đã cập nhật lịch học.' : 'Đã thêm lịch học.', 'success');
        }
    });

    render();
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            render();
        }
    });
    window.addEventListener('mgst-demo-updated', render);
}

function initDashboardPage() {
    const page = document.querySelector('[data-dashboard-page]');

    if (!page) {
        return;
    }

    const classChart = document.querySelector('[data-dashboard-class-chart]');
    const latestStudentsTable = document.querySelector('[data-dashboard-latest-students]');

    function renderClassDistribution(classes, students) {
        const classCounts = classes.map((classItem) => ({
            ...classItem,
            studentCount: students.filter((student) => student.class === classItem.code).length,
        }))
            .sort((first, second) => (
                second.studentCount - first.studentCount
                || first.name.localeCompare(second.name, 'vi')
            ))
            .slice(0, 5);
        const maxStudentCount = Math.max(1, ...classCounts.map((classItem) => classItem.studentCount));

        classChart.replaceChildren();

        if (classCounts.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'class-empty';
            emptyMessage.textContent = 'Chưa có lớp học.';
            classChart.append(emptyMessage);
            return;
        }

        classCounts.forEach((classItem) => {
            const row = document.createElement('div');
            const name = document.createElement('span');
            const track = document.createElement('span');
            const bar = document.createElement('span');
            const count = document.createElement('span');

            row.className = 'class-row';
            name.className = 'class-name';
            name.textContent = classItem.code;
            track.className = 'class-track';
            bar.className = 'class-bar';
            bar.style.setProperty('--bar-width', `${classItem.studentCount / maxStudentCount * 100}%`);
            count.className = 'class-value';
            count.textContent = String(classItem.studentCount);
            track.append(bar);
            row.append(name, track, count);
            classChart.append(row);
        });
    }

    function renderLatestStudents(students) {
        latestStudentsTable.replaceChildren();
        const latestStudents = students.slice(-4).reverse();

        if (latestStudents.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 5;
            cell.textContent = 'Chưa có sinh viên.';
            row.append(cell);
            latestStudentsTable.append(row);
            return;
        }

        latestStudents.forEach((student) => {
            const row = document.createElement('tr');
            const statusCell = document.createElement('td');
            const status = document.createElement('span');

            [student.id, student.name, student.class, student.email].forEach((value) => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.append(cell);
            });

            status.className = `status-badge status-${student.status === 'Bảo lưu'
                ? 'paused'
                : student.status === 'Đã tốt nghiệp'
                    ? 'graduated'
                    : 'active'}`;
            status.textContent = student.status;
            statusCell.append(status);
            row.append(statusCell);
            latestStudentsTable.append(row);
        });
    }

    function render() {
        const data = loadStore();

        if (!data) {
            return;
        }

        const statistics = {
            students: data.students.length,
            classes: data.classes.length,
            subjects: data.subjects.length,
            registrations: data.registrations,
        };
        const numberFormatter = new Intl.NumberFormat('vi-VN');

        Object.entries(statistics).forEach(([key, value]) => {
            const statistic = document.querySelector(`[data-dashboard-stat="${key}"]`);

            if (statistic) {
                statistic.textContent = numberFormatter.format(value);
            }
        });

        renderClassDistribution(data.classes, data.students);
        renderLatestStudents(data.students);
    }

    render();
    window.addEventListener('storage', (event) => {
        if (event.key === storageKey) {
            render();
        }
    });
    window.addEventListener('mgst-demo-updated', render);
}

loadStore();
initStudentsPage();
initClassesPage();
initSubjectsPage();
initSchedulesPage();
initDashboardPage();
