class student {
constructor(m1, m2, name){
    this.marks1 = m1;
    this.marks2 = m2;
    this.name = name;
}
    static func(){
        return "Dev";
    }
    get myfunc(){
        return this.marks1 + this.marks2;
    }
    set change(name){
        this.name = name;
    }
 avg() {
  const totm = (this.marks1 + this.marks2) / 2;
  return totm;
};
}
const s = new student(85,90,'Dev');