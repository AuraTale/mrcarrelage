
<script setup>

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const handleSubmit = () => {
  // Add form submission logic here
  console.log('Form submitted:', { name: name.value, email: email.value, subject: subject.value, message: message.value });
};

 
</script>


<template>
      <section id="contact" class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contactez-Moi</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="contact-content-part  wow fadeInUp delay-0-2s">

                


                <div class="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span class="circle-btn">
                    <i class="ri-headphone-line"></i>
                  </span>
                  <h2>Numéro de Contact:</h2>
                  <p>+212661130160</p>
                </div>


                <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span class="circle-btn">
                    <i class="ri-mail-line"></i>
                  </span>
                  <h2>Email :</h2>
                  <p>mrcarrelage@nextlevelbusiness.ma</p>
                </div>


                <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <h2>Réseaux Sociaux</h2>
                  <div class="about-social">
                    <ul>
                      <li><a target='_blank' href="https://www.facebook.com/p/Mr-Carrelage-61554697440293/?locale=fr_FR"><i class="ri-facebook-circle-fill"></i></a></li>
                      <li><a target='_blank' href="https://www.instagram.com/mrcarrelageofficiel/"><i class="ri-instagram-line"></i></a></li>
                      <!-- <li><a target='_blank' href="https://linkedin.com"><i class="ri-linkedin-fill"></i></a></li> -->
                    </ul>
                  </div>
                </div>

              </div>
            </div> 

            <div class="col-lg-8">
              <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" class="contact-form" @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="name">Nom et Prénom</label>
                        <input
                          type="text"
                          id="name"
                          class="form-control" 
                           v-model="name"
                          placeholder="Votre Nom"
                          required
                          data-error="Saisissez Votre Nom"
                        />
                        <label htmlFor="name" class="for-icon"><i class="far fa-user"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="email">Email Addresse</label>
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                           v-model="email"
                          placeholder="hello@websitename.com"
                          required
                          data-error="Saisissez Votre Email"
                        />
                        <label htmlFor="email" class="for-icon"><i class="far fa-envelope"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label htmlFor="subject">Sujet</label>
                        <input
                          type="text"
                          id="subject"
                          class="form-control"
                           v-model="subject"
                          placeholder="Votre Sujet"
                          required
                          data-error="Saisisez Votre Sujet"
                        />
                        <label htmlFor="subject" class="for-icon"><i class="far fa-user"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label htmlFor="message">Votre Message</label>
                        <textarea
                          name="message"
                          id="message"
                          class="form-control"
                          rows="4"
                           v-model="message"
                          placeholder="Ecrivez Votre Message"
                          required
                          data-error="Saisissez Votre Message"
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-0">
                        <button type="submit" class="theme-btn">
                          Envoyer <i class="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" class="hidden"></div>
                      </div>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="input-success">We have received your mail, We will get back to you soon!</p>
                      <p class="input-error">Sorry, Message could not send! Please try again.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
</template>