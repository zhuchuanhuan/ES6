
        function User(name, pass) {
            this.name = name;
            this.pass = pass;
            // this.showName=function () {
            //     alert(this.name)
            // }
        }

        User.prototype.showName = function () {
            alert(this.name);
        };
        User.prototype.showPass = function () {
            alert(this.pass);
        };


        function VipUser(name, pass, level) {
            User.call(this, name, pass);

            this.level = level;
        }

        console.log(new User())
        VipUser.prototype = new User();//继承prototype方法
        VipUser.prototype.constructor=VipUser;

        VipUser.prototype.showLevel = function () {
            alert(this.level);
        };
        console.log(new VipUser)
        var v1 = new VipUser('blue', '123456', 3);

        v1.showName();
        v1.showPass();
        v1.showLevel();
