"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const comments_1 = require("./comments");
const like_1 = require("./like");
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Post.prototype, "PostId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_1.Comment, (comment) => comment.post, { eager: true }),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Post.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.post, { onDelete: "SET NULL" }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_1.User)
], Post.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_1.Likes, (like) => like.post),
    __metadata("design:type", Array)
], Post.prototype, "like", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "likesCount", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)({ name: "post5004" })
], Post);
