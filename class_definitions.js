class group_class {
    constructor(name, abbr, birthday, parent, x, y) {
        this.name = name;
        this.abbr = abbr;
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
    constructor(relationship_type, date, group1, group2, x1, x2, y) {
        this.relationship_type = relationship_type;
        this.date = date;
        this.group1 = group1;
        this.group2 = group2;
        this.x1 = x1;
        this.x2 = x2;
        this.y = y;
    }
}