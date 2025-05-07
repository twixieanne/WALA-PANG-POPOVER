$(document).ready(function () {
  $("nav a").on("click", function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800
          );
      }
  });

  $(".image-card").on("click", function () {
      $(".image-card").removeClass("active");
      $(this).toggleClass("active");

      $(".popover").not($(this).find(".popover")).fadeOut();
      $(this).find(".popover").fadeToggle();
  });

  $(document).on("click", function (e) {
      if (!$(e.target).closest(".image-card").length) {
          $(".popover").fadeOut();
      }
  });
});

function toggleFlower(rowId) {
  $("#" + rowId).toggleClass("hidden");
}

$(document).ready(function() {
  function createPopover(text, button) {
    const popover = $('<div class="popover-info"></div>').text(text);
    $('body').append(popover);

    const offset = $(button).offset();
    const height = $(button).outerHeight();
    const width = $(button).outerWidth();

    popover.css({
        position: 'absolute',
        top: offset.top + (height / 2) - (popover.outerHeight() / 2),
        left: offset.left + width + 15, 
    });

    popover.hide().fadeIn(300);
}

  $('button[onclick*="showArmor(\'Arrow\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Arrows: Swift and accurate, ideal for long-range attacks.', this);
  });

  $('button[onclick*="showArmor(\'Sword\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Swords: Versatile melee weapons for close combat.', this);
  });

  $('button[onclick*="showArmor(\'Armor\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Armor: Provides essential protection during battles.', this);
  });

  $(document).click(function() {
      $('.popover-info').fadeOut(200, function() {
          $(this).remove();
      });
  });
});

$(document).ready(function () {
  const fairyDustContainer = $(".fairy-dust");

  // Create a particle and append it to the fairy dust container
  function createParticle(x, y) {
    const particle = $("<div>").addClass("particle");
    particle.css({
      left: x - 3 + "px", // Adjust position for center of particle
      top: y - 3 + "px", // Adjust position for center of particle
    });

    fairyDustContainer.append(particle);

    // Remove the particle after animation ends
    setTimeout(() => {
      particle.remove();
    }, 1500); // Duration of particle life (matches with sparkle + fadeOut duration)
  }

  // Show the fairy dust container when the mouse moves
  $(document).on("mousemove", function (e) {
    fairyDustContainer.show();
    createParticle(e.pageX, e.pageY); // Create particles at mouse position
  });

  // Hide the container when the mouse leaves the document
  $(document).on("mouseleave", function () {
    fairyDustContainer.hide();
  });
});

$(document).ready(function () {
    // Number of flying fairy lights
    const numLights = 50;
    const lightContainer = $(".fairy-light-container");
  
    // Generate the fairy lights
    function generateFairyLights() {
      for (let i = 0; i < numLights; i++) {
        const light = $("<div>").addClass("fairy-light");
        const randomLeft = Math.random() * 100; // Randomize the starting position of the lights
        const randomDelay = Math.random() * 5; // Random delay to create different animation timings
        const size = Math.random() * 3 + 5; // Random size for the lights
        light.css({
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}s`,
          width: `${size}px`,
          height: `${size}px`,
        });
        lightContainer.append(light);
      }
    }
  
    generateFairyLights(); // Call the function to generate the lights
  });

  $(document).ready(function () {
    // Function to trigger bounce animation every time the button is clicked
    function triggerBounce(button) {
      $(button).removeClass('clicked'); // Remove the 'clicked' class to reset animation
      // Trigger a reflow to reset the animation (force restart)
      void $(button)[0].offsetWidth;
      $(button).addClass('clicked'); // Re-add the 'clicked' class to start the animation
    }
  
    // When the HTML button is clicked, toggle the HTML flower between grow and shrink
    $("#htmlbtn").click(function() {
      $("#html").toggleClass("flower-grow flower-shrink");  // Toggle the animation class for flower
      triggerBounce(this); // Trigger the bounce animation on HTML button
      resetOtherButtons("#htmlbtn"); // Reset other buttons' color to the default
    });
  
    // When the CSS button is clicked, toggle the CSS flower between grow and shrink
    $("#cssbtn").click(function() {
      $("#css").toggleClass("flower-grow flower-shrink");  // Toggle the animation class for flower
      triggerBounce(this); // Trigger the bounce animation on CSS button
      resetOtherButtons("#cssbtn"); // Reset other buttons' color to the default
    });
  
    // When the Java button is clicked, toggle the Java flower between grow and shrink
    $("#javabtn").click(function() {
      $("#java").toggleClass("flower-grow flower-shrink");  // Toggle the animation class for flower
      triggerBounce(this); // Trigger the bounce animation on Java button
      resetOtherButtons("#javabtn"); // Reset other buttons' color to the default
    });
  
    // Function to reset the color of the other buttons to default
    function resetOtherButtons(button) {
      $(".menu button").not(button).removeClass("clicked"); // Remove the 'clicked' class from other buttons
    }
  });
  
  $(document).ready(function () {
  // Function to trigger bounce animation every time the button is clicked
  function triggerBounce(button) {
    $(button).removeClass('clicked'); // Remove the 'clicked' class to reset animation
    // Trigger a reflow to reset the animation (force restart)
    void $(button)[0].offsetWidth;
    $(button).addClass('clicked'); // Re-add the 'clicked' class to start the animation
  }

  // When the Arrow button is clicked, trigger the bounce animation
  $("#arbtn").click(function() {
    triggerBounce(this); // Trigger the bounce animation on Arrow button
  });

  // When the Sword button is clicked, trigger the bounce animation
  $("#swbtn").click(function() {
    triggerBounce(this); // Trigger the bounce animation on Sword button
  });

  // When the Armor button is clicked, trigger the bounce animation
  $("#armbtn").click(function() {
    triggerBounce(this); // Trigger the bounce animation on Armor button
  });
});
