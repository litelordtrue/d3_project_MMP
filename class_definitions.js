class group_class {
    constructor(name, birthday, parent, x, y) {
        this.name = name;
        this.birthday = birthday;
        this.parent = parent;
        this.x = x;
        this.y = y;
    }
}

class event_class {
    constructor(name, birthday, parent, x, y) {
        this.name = name;
        this.birthday = birthday;
        this.parent = parent;
        this.x = x;
        this.y = y;
    }
}

class relationship_class {
    constructor(relationship_type, date, group1, group2) {
        this.relationship_type = relationship_type;
        this.date = date;
        this.group1 = group1;
        this.group2 = group2;
    }
}