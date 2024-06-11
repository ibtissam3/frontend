import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string = '';
  form: FormGroup = new FormGroup({});
  isLoading = false;
  post: Post = {id: '', title: '', content: '', imagePath: ''};
  imagePreview: string = '';
  constructor(public postsService: PostsService, public route: ActivatedRoute) {}
  error = {title: 'Enter title', content: 'Enter details'};
  ngOnInit() {

    this.form  = new FormGroup({

      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)] // payment title must be longer than 3 chrs
      }),
      content: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId') || '';
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content, imagePath: postData.imagePath};
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.imagePath
          });
        });
      } else {
        this.mode = 'create';
        this.postId = '';
      }
    });
  }
  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files.length > 0 ? target.files[0] : null;    if (file) {
      this.form.patchValue({image: file});
      this.form.get('image')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
    } else {
      this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
    }
    this.form.reset();
  }
}
/**
 * When we want to edit ultility payment we fetch its data form
 * posts.service.ts and not from server. Same method should be applied for
 * dahboard component.
 */
