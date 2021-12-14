
window.addEventListener("load", function () {
    name_txt = document.getElementsByName("nameTxt")[0];
    age_txt = document.getElementsByName("ageTxt")[0];
    grade_Txt = document.getElementsByName("gradeTxt")[0];
    dept = document.getElementsByName("deptVal")[0];
    var arr = [];//backup

    const arrdata = function (stdTable) {//make a backup from this
        arr = [];
        for (i = 0; i < stdTable.children.length; i++) {
            arr.push(stdTable.getElementsByTagName("tr")[i]);
        }
        return arr;
    };

    function Employee(name, age, grade, dept) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.dept = dept;
    }

    trow1 = document.createElement("tr");
    trow2 = document.createElement("tr");
    sort_department = document.createElement("select");
    filter_salary = document.createElement("select");
    sort_deptli = document.createElement("option");
    sort_deptli.innerText = "Unsort";
    filter_salaryli = document.createElement("option");
    filter_salaryli.innerText = "degree";
    asccending = document.createElement("option");
    asccending.innerText = "Ascending";
    descinding = document.createElement("option");
    descinding.innerText = "Descending";
    greater = document.createElement("option");
    greater.innerText = "greater than 50";
    less = document.createElement("option");
    less.innerText = "less than 50";

    parenttable.appendChild(trow1).appendChild(sort_department).append(sort_deptli, asccending, descinding);
    parenttable.appendChild(trow2).appendChild(filter_salary).append(filter_salaryli, greater, less);
    buttonclicked = document.querySelector("#btn");
    buttonclicked.addEventListener("click", function () {
        emp = new Employee(name_txt.value, age_txt.value, grade_Txt.value, dept.value);
        if (name_txt.value == null || name_txt.value == "") {
            alert("user name must not null")
            return false;
        }
        
    else if (isNaN(age_txt.value) || age_txt.value < 25 || age_txt.value > 60) {
            alert("age should between 25 and 60");
            return false;
        }
        else if (isNaN(grade_Txt.value) || grade_Txt.value < 0 || grade_Txt.value > 100) {
            alert("grade shoud between 0 to 100")
            return false;

        }


        tr = document.createElement("tr");
        deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        for (i in emp) {
            td = document.createElement("td");
            td.innerText = emp[i];
            stdTable.appendChild(tr).appendChild(td);
        }
        td2 = document.createElement("td");
        tr.appendChild(td2).appendChild(deleteBtn);


        deleteBtn.addEventListener("click", function () {
            stdTable.removeChild(this.parentElement.parentElement);
        });

        arrdata(stdTable);

    });

    sort_department.addEventListener("change", function () {
        if (sort_department.value === "Ascending") {
            var arr1 = [];
            for (i = 0; i < stdTable.children.length; i++) {
                arr1.push(stdTable.getElementsByTagName("tr")[i]);
            }
            arr1.sort(function (a, b) {
                if (a.children[3].innerText > b.children[3].innerText) {
                    return 1;
                } else if (a.children[3].innerText < b.children[3].innerText) {
                    return -1;
                } else {
                    return 0;
                }
            });
            stdTable.innerHTML = "";
            for (i in arr1) {
                stdTable.appendChild(arr1[i]);
            }
        } else if (sort_department.value === "Descending") {
            var arr1 = [];
            for (i = 0; i < stdTable.children.length; i++) {
                arr1.push(stdTable.getElementsByTagName("tr")[i]);
            }
            arr1.sort(function (a, b) {
                if (a.children[3].innerText < b.children[3].innerText) {
                    return 1;
                } else if (a.children[3].innerText > b.children[3].innerText) {
                    return -1;
                } else {
                    return 0;
                }
            });
            stdTable.innerHTML = "";
            for (i in arr1) {
                stdTable.appendChild(arr1[i]);
            }
        }
    });

    filter_salary.addEventListener("change", function () {
        bigvalue = arr.filter(function (row) {
            if (Number(row.children[2].innerText) >= 50) return true;
        });
        lowvalue = arr.filter(function (row) {
            if (Number(row.children[2].innerText) < 50) return true;
        });

        stdTable.innerHTML = "";

        if (filter_salary.value === "greater than 50") {
            for (i in bigvalue) {
                stdTable.appendChild(bigvalue[i]);
            }
        } else if (filter_salary.value === "less than 50") {
            for (i in lowvalue) {
                stdTable.appendChild(lowvalue[i]);
            }
        } else if (filter_salary.value === "unsorted") {
            for (i in arr) {
                stdTable.appendChild(arr[i]);
            }
        }
    });
});
