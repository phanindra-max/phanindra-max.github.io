---
layout: page
permalink: /speaking/
title: speaking
description: Talks, workshops, and presentations.
nav: true
nav_order: 4
---

I enjoy explaining technical work to people from many backgrounds, from students in a first workshop to researchers and higher-education leaders. A full list of talks is on my [CV](/cv/).

<div class="row row-cols-1 row-cols-md-2 speaking">
{% for item in site.data.speaking %}
  <div class="col mb-4">
    {% assign img = item.image | prepend: 'assets/img/speaking/' %}
    {% include figure.liquid loading="lazy" path=img sizes="(min-width: 768px) 430px, 95vw" class="img-fluid rounded z-depth-1" alt=item.caption zoomable=true %}
    <p class="speaking-title mt-2 mb-1"><strong>{{ item.title }}</strong>{% if item.date %} &middot; {{ item.date }}{% endif %}</p>
    <p class="speaking-caption">{{ item.caption }}</p>
  </div>
{% endfor %}
</div>
